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
  apiKey: "AIzaSyB1E4pS6M6PW7liOZlpJmGV5ApzclH7p4Q",
  authDomain: "vite-project-2f372.firebaseapp.com",
  projectId: "vite-project-2f372",
  storageBucket: "vite-project-2f372.appspot.com",
  messagingSenderId: "264194478371",
  appId: "1:264194478371:web:df4e73cb70b13d52883c96"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app");