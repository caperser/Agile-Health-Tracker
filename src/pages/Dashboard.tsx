// components/Dashboard.tsx
import { Typography, Grid, Paper, Box, Alert } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { getAllSurveys, type Survey } from '@/utils/getSurveys';
import { getWarnings, type Warning } from '@/utils/getWarnings';
import { getInsights, type Insight } from '@/utils/getInsights';
import { formatChartData } from '@/utils/formatChartData';

const Dashboard = () => {
  const [surveyData, setSurveyData] = useState<Survey[]>([]);
  const [warningData, setWarningData] = useState<Warning[]>([]);
  const [insightData, setInsightData] = useState<Insight[]>([]);

  useEffect(() => {
    console.log('Fetching data for dashboard...');
    const fetchData = async () => {
      const surveys = await getAllSurveys();
      const warnings = await getWarnings();
      const insights = await getInsights();

      setSurveyData(surveys);
      setWarningData(warnings);
      setInsightData(insights);
    };

    fetchData();
  }, []);

  //after the useEffect runs, we can use the fetched data
  const chartData = formatChartData(surveyData);
  console.log('Fetched survey data:', surveyData);
  console.log('Formatted chart data:', chartData);

  const getColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'success.main';
      case 'neutral':
        return 'info.main';
      case 'negative':
        return 'error.main';
      default:
        return 'grey.500';
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Team Health Dashboard
      </Typography>

      {/* Line Chart */}
      <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
        <Typography variant="h6">Sprint Progress Overview</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="sprint" />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="morale" stroke="#8884d8" />
            <Line type="monotone" dataKey="workload" stroke="#82ca9d" />
            <Line type="monotone" dataKey="collaboration" stroke="#ffc658" />
            <Line type="monotone" dataKey="technicalQuality" stroke="#ff7f50" />
          </LineChart>
        </ResponsiveContainer>
      </Paper>

      {/* Warnings Section */}
      {warningData.length > 0 && (
        <Box mb={4}>
          <Typography variant="h6" gutterBottom>
            ⚠️ Alerts & Suggestions
          </Typography>
          {warningData.map((warn, idx) => (
            <Alert key={idx} severity="warning" sx={{ mb: 2 }}>
              <strong>{warn.metric}:</strong> Average score of {warn.averageValue}. Suggestion:{' '}
              {warn.suggestion}
            </Alert>
          ))}
        </Box>
      )}

      {/* Top Comments Section */}
      {insightData.length > 0 && (
        <Paper elevation={2} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            🔍 Top Themes from Recent Feedback
          </Typography>
          <Grid container spacing={2}>
            {insightData.map((comment, idx) => (
              // @ts-expect-error MUI v7/React 19 type issue
              <Grid item xs={12} sm={4} key={idx}>
                <Paper sx={{ p: 2, backgroundColor: getColor(comment.sentiment) }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {comment.topic}
                  </Typography>
                  <Typography variant="body2">{comment.summary}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      )}
    </Box>
  );
};

export default Dashboard;
