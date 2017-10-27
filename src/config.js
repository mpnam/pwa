import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyBnHurRDwEqU_e-s0oOTpgL-6xmPtBBerQ",
    authDomain: "pwa-demo-9e1d9.firebaseapp.com",
    databaseURL: "https://pwa-demo-9e1d9.firebaseio.com"
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;