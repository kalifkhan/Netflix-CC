// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAMAnU2GSoYipSWlA4Hx9swI5YTWwzfIJ0",
  authDomain: "netflix-clone-15435.firebaseapp.com",
  projectId: "netflix-clone-15435",
  storageBucket: "netflix-clone-15435.appspot.com",
  messagingSenderId: "336329049017",
  appId: "1:336329049017:web:197e518474f4e764ef6c68",
  measurementId: "G-RQ1H1KZMNP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
const auth= firebase.auth();

export {auth};
export default db;


