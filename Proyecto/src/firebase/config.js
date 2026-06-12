import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYr2q5PDYyBdNyl-fMROpaFu5XnHFd9cU",
  authDomain: "goodwork-project.firebaseapp.com",
  projectId: "goodwork-project",
  storageBucket: "goodwork-project.firebasestorage.app",
  messagingSenderId: "360766645945",
  appId: "1:360766645945:web:054c862777067b89501d68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);