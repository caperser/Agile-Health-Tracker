import * as pubsub from 'firebase-functions/v1/pubsub';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import OpenAI from 'openai';
import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import { getFirestore } from 'firebase-admin/firestore';

admin.initializeApp();

function getOpenAIApiKey() {
  return process.env.OPENAI_API_KEY || (functions.config().openai && functions.config().openai.key);
}

export const generateInsights = pubsub.schedule('every 24 hours').onRun(async () => {
  const openai = new OpenAI({
    apiKey: getOpenAIApiKey(),
  });

  const surveysSnapshot = await admin.firestore().collection('surveys').get();
  const surveys = surveysSnapshot.docs.map((doc) => doc.data());

  const latestSprint = Math.max(...surveys.map((s) => s.sprintNumber || 0));
  const recentSprints = [latestSprint, latestSprint - 1, latestSprint - 2];

  const recentComments = surveys
    .filter((s) => recentSprints.includes(s.sprintNumber))
    .flatMap((s) => [s.commentsOnImprove, s.commentsOnWhatWentWell])
    .filter((c): c is string => !!c && c.length > 10);

  if (recentComments.length === 0) {
    console.log('No recent comments found.');
    return null;
  }

  const prompt = `Analyze the following Agile team feedback comments from recent sprints. Identify 2-3 common themes and summarize each one:\n\n${recentComments.join(
    '\n',
  )}`;

  const aiResponse = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are an Agile coach helping teams improve performance.' },
      { role: 'user', content: prompt },
    ],
  });

  const summary = aiResponse.choices[0]?.message?.content || 'No insights found.';

  await admin.firestore().collection('insights').add({
    topic: 'Top Themes',
    summary,
    sentiment: 'mixed',
    sprintNumbers: recentSprints,
    timestamp: new Date(),
  });

  return null;
});

export const generateWarning = onDocumentCreated(
  {
    document: 'surveys/{docId}',
    secrets: ['OPENAI_API_KEY'],
  },
  async (event) => {
    const data = event.data?.data();
    if (!data) return;

    const db = getFirestore();
    const lowMetrics: { metric: string; value: number }[] = [];

    const threshold = 2.5;
    const keys = ['morale', 'collaboration', 'workload', 'technicalQuality'];

    keys.forEach((key) => {
      if (data[key] < threshold) {
        lowMetrics.push({ metric: key, value: data[key] });
      }
    });

    const openai = new OpenAI({
      apiKey: getOpenAIApiKey(),
    });

    const warnings = await Promise.all(
      lowMetrics.map(async ({ metric, value }) => {
        const prompt = `In a sprint team health survey, the average score for ${metric} was ${value}. Suggest a practical, team-based strategy to improve ${metric} in a future sprint. Keep the tone helpful and constructive.`;

        const completion = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
        });

        const suggestion = completion.choices[0].message.content ?? 'No suggestion generated.';

        return {
          metric,
          avg: value,
          suggestion,
          createdAt: new Date(),
        };
      }),
    );

    const batch = db.batch();
    warnings.forEach((warning) => {
      const ref = db.collection('warnings').doc();
      batch.set(ref, warning);
    });

    await batch.commit();
  },
);
