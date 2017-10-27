import { firebaseAuth, googleProvider } from '../config';


export function loginWithGoogle() {
    return firebaseAuth().signInWithPopup(googleProvider);
}

export function logout() {
    return firebaseAuth().signOut();
}