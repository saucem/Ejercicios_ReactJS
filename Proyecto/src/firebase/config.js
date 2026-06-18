import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const apiKeyConfig = import.meta.env.VITE_API_KEY;
const apiAuthDomainConfig = import.meta.env.VITE_API_AUTH_DOMAIN;
const apiMsgSenderIdConfig = import.meta.env.VITE_API_MSG_SENDER_ID;
const apiAppIdConfig = import.meta.env.VITE_API_APP_ID;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKeyConfig,
  authDomain: apiAuthDomainConfig,
  projectId: "goodwork-project",
  storageBucket: "goodwork-project.firebasestorage.app",
  messagingSenderId: apiMsgSenderIdConfig,
  appId: apiAppIdConfig
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);