import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface Insight {
  category: 'improvements' | 'wentWell' | 'actionItems';
  summaryText: string;
  sprintRange: string;
  relatedKeywords: string[];
}

export const addInsight = async (insight: Insight) => {
  try {
    const ref = await addDoc(collection(db, 'insights'), {
      ...insight,
      timestamp: Timestamp.now(),
    });
    return ref.id;
  } catch (error) {
    console.error('Error saving insight:', error);
    throw error;
  }
};
