// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTZjK-Z_YiaZace5NwpnZBnmBCFg4rxIc",
    authDomain: "rangpur-tuition-teacher-media.firebaseapp.com",
    projectId: "rangpur-tuition-teacher-media",
    storageBucket: "rangpur-tuition-teacher-media.appspot.com",
    messagingSenderId: "284618694876",
    appId: "1:284618694876:web:b4f27ba2af8398933bd419"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;