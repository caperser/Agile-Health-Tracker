import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface SurveyResponse {
  technicalQuality: number;
  morale: number;
  workload: number;
  collaboration: number;
  sprintNumber: number;
  commentsOnImprove: string;
  commentsOnWentWell: string;
  commentsOnActionItems: string;
}

export const submitSurvey = async (data: SurveyResponse) => {
  try {
    const docRef = await addDoc(collection(db, 'surveys'), {
      ...data,
      timestamp: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error submitting survey:', error);
    throw error;
  }
};
