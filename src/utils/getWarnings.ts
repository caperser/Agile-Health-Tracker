import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export type Warning = {
  id: string;
  metric: string;
  averageValue: number;
  sprintNumber: number;
  suggestion: string;
  timestamp?: Date;
};
export const getWarnings = async () => {
  try {
    const q = query(collection(db, 'warnings'), orderBy('timestamp', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Warning[];
  } catch (error) {
    console.error('Error fetching warnings:', error);
    throw error;
  }
};
