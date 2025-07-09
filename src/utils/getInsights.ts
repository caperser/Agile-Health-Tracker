import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export type Insight = {
  topic: string;
  summary: string;
  id: string;
  sentiment: string;
  timestamp?: Date;
  sprintNumbers: number[];
};

export const getInsights = async () => {
  try {
    const q = query(collection(db, 'insights'), orderBy('timestamp', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Insight[];
  } catch (error) {
    console.error('Error fetching insights:', error);
    throw error;
  }
};
