// firebase-config.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBNGFLlfoOgyjHsY7yit7f2P137LBB2cYA",
    authDomain: "medimomo-a93f6.firebaseapp.com",
    projectId: "medimomo-a93f6",
    storageBucket: "medimomo-a93f6.appspot.com",
    messagingSenderId: "127325816605",
    appId: "1:127325816605:web:104cf0ce609bd9ea9f43f4",
    measurementId: "G-C7QJDPWJDW"
  };

// Initialisation Firebase
const app = initializeApp(firebaseConfig);

// Authentification
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
