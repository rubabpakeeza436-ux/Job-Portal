// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPPXyKaEKDceQpQ_umqvatqt7GBmyq0Q4",
  authDomain: "jobseek-dd631.firebaseapp.com",
  projectId: "jobseek-dd631",
  storageBucket: "jobseek-dd631.appspot.com",
  messagingSenderId: "445488101580",
  appId: "1:445488101580:web:d2097e3daa9f067c92aa69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app