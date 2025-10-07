// ---------- IMPORTANT ----------
/*
 Replace the following placeholder config with your Firebase project config.
 Get this from Firebase Console > Project settings > SDK setup and configuration.
 Example:
 const firebaseConfig = {
   apiKey: "xxx",
   authDomain: "your-project.firebaseapp.com",
   projectId: "your-project-id",
   storageBucket: "your-project-id.appspot.com",
   messagingSenderId: "123",
   appId: "1:123:web:abc"
 };
*/

	// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries

	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyCm1pxhYjfbZ2J4QLh6klPhEyBemRr7R0w",
  authDomain: "household-expense-manage.firebaseapp.com",
  projectId: "household-expense-manage",
  storageBucket: "household-expense-manage.firebasestorage.app",
  messagingSenderId: "1071293115175",
  appId: "1:1071293115175:web:475fce404181083c88d702",
  measurementId: "G-3YTZJQ8YV3"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const analytics = getAnalytics(app);