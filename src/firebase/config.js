import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4k4h_6IXU5ODtlBpPq-jijAF3gm0Uxdc",
  authDomain: "sanskar-ayush-5c0ab.firebaseapp.com",
  projectId: "sanskar-ayush-5c0ab",
  storageBucket: "sanskar-ayush-5c0ab.firebasestorage.app",
  messagingSenderId: "924347878025",
  appId: "1:924347878025:web:e06f24cd4eeaa27f059458",
  measurementId: "G-9F2L39V3MW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
// export { db, storage };