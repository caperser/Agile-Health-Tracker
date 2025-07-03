import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface WarningData {
  metric: string;
  averageValue: number;
  sprintNumber: number;
  suggestion: string;
}

export const addWarning = async (data: WarningData) => {
  try {
    const ref = await addDoc(collection(db, 'warnings'), {
      ...data,
      timestamp: Timestamp.now(),
    });
    return ref.id;
  } catch (error) {
    console.error('Error adding warning:', error);
    throw error;
  }
};
