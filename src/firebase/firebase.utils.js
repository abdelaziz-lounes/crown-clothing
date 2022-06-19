import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyA4N54wD3vQsq3HtiXuvqaXD4-zykaEKDo",
    authDomain: "cloths-db-dfaf5.firebaseapp.com",
    projectId: "cloths-db-dfaf5",
    storageBucket: "cloths-db-dfaf5.appspot.com",
    messagingSenderId: "1087212633600",
    appId: "1:1087212633600:web:2cac9e0bfffb0db77fe2e5",
    measurementId: "G-QD525B5WJ4"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({displayName,email,createdAt,...additionalData})     
        } catch (error) {
            console.log('creating user error',error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account' });

export const sigInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
