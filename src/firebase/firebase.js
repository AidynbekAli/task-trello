// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKXu13QQ7D30O20tZZFjq-fgJ9PBpP1Xs",
  authDomain: "trello-task-e7e76.firebaseapp.com",
  projectId: "trello-task-e7e76",
  storageBucket: "trello-task-e7e76.appspot.com",
  messagingSenderId: "1095056025349",
  appId: "1:1095056025349:web:45cae502295e62739ff96c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;