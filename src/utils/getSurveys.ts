import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export type Survey = {
  morale: number;
  workload: number;
  collaboration: number;
  technicalQuality: number;
  sprintNumber: number;
  commentsOnImprove: string;
  commentsOnWentWell: string;
  commentsOnActionItems: string;
  id: string;
};

export const getAllSurveys = async () => {
  try {
    const q = query(collection(db, 'surveys'), orderBy('timestamp', 'asc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Survey[];
  } catch (error) {
    console.error('Error fetching surveys:', error);
    throw error;
  }
};
