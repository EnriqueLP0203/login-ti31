import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUK0SCGbW2Z3_R3tYPhhtHmCFfF_nDnZk",
  authDomain: "log-in-iti31.firebaseapp.com",
  projectId: "log-in-iti31",
  storageBucket: "log-in-iti31.firebasestorage.app",
  messagingSenderId: "635064390479",
  appId: "1:635064390479:web:023ebf1a9e190f42e26b3a",
  measurementId: "G-4JLB2CDMSN"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router);

app.mount('#app');



