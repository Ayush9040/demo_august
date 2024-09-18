// Import functions from the Firebase SDK
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Replace the following with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFFJ-gg8SwZbzHnv95oqmitW2RYNgtB6U",
  authDomain: "tyi-ad-campaign.firebaseapp.com",
  projectId: "tyi-ad-campaign",
  storageBucket: "tyi-ad-campaign.appspot.com",
  messagingSenderId: "228362633001",
  appId: "1:228362633001:web:de4f42eb0784c6ca5cc138",
  measurementId: "G-M4ZF22LXX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth instance and create Google Auth Provider
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider };
