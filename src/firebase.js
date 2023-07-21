// For Firebase JS SDK v7.20.0 and later, measurementId is optional
<<<<<<< HEAD
import firebase from 'firebase';
=======
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
>>>>>>> 14ee36544b742b3b23639d1c03f532561f3c7269


const firebaseConfig = {
  apiKey: "AIzaSyAMAnU2GSoYipSWlA4Hx9swI5YTWwzfIJ0",
  authDomain: "netflix-clone-15435.firebaseapp.com",
  projectId: "netflix-clone-15435",
  storageBucket: "netflix-clone-15435.appspot.com",
  messagingSenderId: "336329049017",
  appId: "1:336329049017:web:197e518474f4e764ef6c68",
  measurementId: "G-RQ1H1KZMNP"
};

<<<<<<< HEAD
const firebaseApp = firebase.initializeApp(firebaseConfig);
=======
const firebaseApp = firebase.initializeApp(firebaseConfig)
>>>>>>> 14ee36544b742b3b23639d1c03f532561f3c7269

const db= firebaseApp.firestore();
const auth= firebase.auth();

export {auth};
export default db;


