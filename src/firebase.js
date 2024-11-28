import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyA55X7xrWnoir0_JKtkT6kfjIphRWEak7w",
    authDomain: "projeto-aula-luiz.firebaseapp.com",
    projectId: "projeto-aula-luiz",
    storageBucket: "projeto-aula-luiz.firebasestorage.app",
    messagingSenderId: "1054046861041",
    appId: "1:1054046861041:web:65476dfef84e8a71fbdb50"
  };

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };