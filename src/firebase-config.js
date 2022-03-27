import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA_PPuYIXMDFPbpLyjAje0bJ4KwcQ6r9n0",
    authDomain: "test-basic-18a95.firebaseapp.com",
    projectId: "test-basic-18a95",
    storageBucket: "test-basic-18a95.appspot.com",
    messagingSenderId: "691255412340",
    appId: "1:691255412340:web:2dee684dd3373725ef3321"
};
 

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)