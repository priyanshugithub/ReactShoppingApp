import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBmKUydxrZpWwgQSiM-L6OgRJVafyfUjUI",
    authDomain: "crwn-db-3ca7c.firebaseapp.com",
    databaseURL: "https://crwn-db-3ca7c.firebaseio.com",
    projectId: "crwn-db-3ca7c",
    storageBucket: "crwn-db-3ca7c.appspot.com",
    messagingSenderId: "385666560612",
    appId: "1:385666560612:web:ab9bb3f6a64bc80f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;