import firebase from 'firebase/app';
import 'firebase/messaging';
const messaging = firebase.messaging();
// add your firebase credentials
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
