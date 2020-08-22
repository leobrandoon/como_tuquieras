import firebase from 'firebase/app';
import 'firebase/firestore';    // added this line
var firebaseConfig = {
    apiKey: "AIzaSyCG9slUeyKko5oIQBCTSFXQMiro-BVfIJM",
    authDomain: "como-tu-quieras-41846.firebaseapp.com",
    databaseURL: "https://como-tu-quieras-41846.firebaseio.com",
    projectId: "como-tu-quieras-41846",
    storageBucket: "como-tu-quieras-41846.appspot.com",
    messagingSenderId: "1049508515275",
    appId: "1:1049508515275:web:178a96b69896904acf3a4e"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);    // capture initialized app in a variable
export const db = firebaseApp.firestore();


