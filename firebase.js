import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
