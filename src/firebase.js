import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUq1Ne9Ozh5ForCH5iLwsq7C0JAFE1uRE",
  authDomain: "slack-clone-a25b8.firebaseapp.com",
  projectId: "slack-clone-a25b8",
  storageBucket: "slack-clone-a25b8.appspot.com",
  messagingSenderId: "63322917253",
  appId: "1:63322917253:web:1dec497c03dcd17fd31cec",
  measurementId: "G-3Q8LDNQ42T"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider, db };
