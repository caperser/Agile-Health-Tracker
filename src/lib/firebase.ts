import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDtm8wSvKTVCAHb1NCw5CQMc2n_lfQ3HF4',
  authDomain: 'agilehealthtracker.firebaseapp.com',
  databaseURL: 'https://agilehealthtracker-default-rtdb.firebaseio.com',
  projectId: 'agilehealthtracker',
  storageBucket: 'agilehealthtracker.firebasestorage.app',
  messagingSenderId: '194735391689',
  appId: '1:194735391689:web:43ec4974d148aed4b49e18',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
