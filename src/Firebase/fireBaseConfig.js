import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    //Paste Your firebase config here
    apiKey: "AIzaSyB0lgVWmWjWKxVkZmtTBU5wrPA2dr3D4JM",
    authDomain: "newmoin.firebaseapp.com",
    projectId: "newmoin",
    storageBucket: "newmoin.appspot.com",
    messagingSenderId: "654528049883",
    appId: "1:654528049883:web:523c9f0d5f79ac186352fe"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }