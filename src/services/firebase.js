import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
  } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDpQw94DZnYMOuzUmfBx0smNmVJ63AdLMw",
  authDomain: "gbreactproject-4f53a.firebaseapp.com",
  databaseURL: "https://gbreactproject-4f53a-default-rtdb.firebaseio.com",
  projectId: "gbreactproject-4f53a",
  storageBucket: "gbreactproject-4f53a.appspot.com",
  messagingSenderId: "132521526571",
  appId: "1:132521526571:web:ec525986d814769438f16e"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

export const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export const logIn = async (email, password) => {
  await signInWithEmailAndPassword(firebaseAuth, email, password);
};

export const logOut = async () => await signOut(firebaseAuth);

const db = getDatabase(app);

export const chatsRef = ref(db, 'chats');
export const messagesRef = ref(db, 'messages');