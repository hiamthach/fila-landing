// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCZ2dr692U13_9ePI1eX7kKTf0-57HMjI8',
  authDomain: 'fila-f0b8c.firebaseapp.com',
  projectId: 'fila-f0b8c',
  storageBucket: 'fila-f0b8c.appspot.com',
  messagingSenderId: '244226397811',
  appId: '1:244226397811:web:f4ab95483ba3ea535bbc06',
  measurementId: 'G-ZG20X9LW8X',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default { app, analytics };
