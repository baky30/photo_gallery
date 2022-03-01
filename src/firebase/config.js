import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBprYiRzH9y7VHgetFVJiky03NhTYgmhJg",
    authDomain: "firegramm-767b8.firebaseapp.com",
    projectId: "firegramm-767b8",
    storageBucket: "firegramm-767b8.appspot.com",
    messagingSenderId: "747468871370",
    appId: "1:747468871370:web:091d4504bba866d77ec633",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export default { projectFirestore, projectStorage }
