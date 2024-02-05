// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import 'dotenv/config'

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

let analytics: Analytics

const firebaseApp = initializeApp(firebaseConfig);

if (firebaseApp.name && typeof window !== 'undefined') {
  analytics = getAnalytics(firebaseApp);
}

export { analytics }
