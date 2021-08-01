import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCvVd7LNCzc7hg_2o-XQGYSJRpHjkT__BE",
    authDomain: "photo-gallery-92d5f.firebaseapp.com",
    projectId: "photo-gallery-92d5f",
    storageBucket: "photo-gallery-92d5f.appspot.com",
    messagingSenderId: "773540483994",
    appId: "1:773540483994:web:bc5c8ffc0ff4a4d19fe023"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export default { projectFirestore, projectStorage }
