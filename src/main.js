import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "./router/index"; // 追加

import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(VueRouter).mount("#app"); // 変更

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFEZh5wHW17xx0I8BhQwlMPoYX9r7SRRA",
  authDomain: "otonano-sapporovolley.firebaseapp.com",
  projectId: "otonano-sapporovolley",
  storageBucket: "otonano-sapporovolley.appspot.com",
  messagingSenderId: "682719516917",
  appId: "1:682719516917:web:db1571bcac198caad4cdbc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app");