import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDhvsL1xG0Cg-u40Ow2yx6-3Isn8bTq3eQ",
    authDomain: "e-commerce-d85e3.firebaseapp.com",
    projectId: "e-commerce-d85e3",
    storageBucket: "e-commerce-d85e3.appspot.com",
    messagingSenderId: "605330296090",
    appId: "1:605330296090:web:1e596ed58ad18393b470a3",
    measurementId: "G-2LGGF60B58"
  };

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

