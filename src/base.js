import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCJpOKdTYe6CIBfSDWSNeofZmC-e0tzjEA",
        authDomain: "catch-of-the-day-joshua-b657f.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-joshua-b657f.firebaseio.com",
        projectId: "catch-of-the-day-joshua-b657f",
        storageBucket: "catch-of-the-day-joshua-b657f.appspot.com",
        messagingSenderId: "383451154378",
        appId: "1:383451154378:web:93a761cc6d04d80dbfb133",
        measurementId: "G-YL9X6MRRZ2"
      
});

// Creating reabase
const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;

