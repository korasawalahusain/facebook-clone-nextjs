import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJfEqQTS4R1xOGG6o82FbZSxitsdRptqo",
  authDomain: "facebook-clone-nextjs-13a46.firebaseapp.com",
  projectId: "facebook-clone-nextjs-13a46",
  storageBucket: "facebook-clone-nextjs-13a46.appspot.com",
  messagingSenderId: "600461796071",
  appId: "1:600461796071:web:34e62e0d0174071e18f842",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
