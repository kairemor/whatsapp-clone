import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyA1eEYUZ5SJ6L5pPmCkhAxkqJU3OzKzdB4",
  authDomain: "whatsapp-clone-5c8fa.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-5c8fa.firebaseio.com",
  projectId: "whatsapp-clone-5c8fa",
  storageBucket: "whatsapp-clone-5c8fa.appspot.com",
  messagingSenderId: "36806290097",
  appId: "1:36806290097:web:5f18df3cfc4c651ba51090",
  measurementId: "G-G1ZV0RB2V4"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {
  auth,
  provider
}
export default db;