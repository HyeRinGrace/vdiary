// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyD99_IQZs5ds7uYbN7lQHf1x6vkN6c_kSs",
  authDomain: "vlogboard-90788.firebaseapp.com",
  databaseURL: "https://vlogboard-90788-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vlogboard-90788",
  storageBucket: "vlogboard-90788.appspot.com",
  messagingSenderId: "530492208221",
  appId: "1:530492208221:web:54ca61386fc29436cf09b4",
  measurementId: "G-TQW0CYQBTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
export const storage = getStorage();
export default app;