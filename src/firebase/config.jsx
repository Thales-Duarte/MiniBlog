
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCocDsUhnhWfWGzekAOa96XQTh84LcOcSs",
  authDomain: "miniblog-66d52.firebaseapp.com",
  projectId: "miniblog-66d52",
  storageBucket: "miniblog-66d52.firebasestorage.app",
  messagingSenderId: "144451519577",
  appId: "1:144451519577:web:a17f70bd87d22ef7359d48",
  measurementId: "G-D7YPCJFB1Q"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db, app};