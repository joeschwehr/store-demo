import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBmLPxKgauGdPajUj1ctcK68sogXFyWndM",
    authDomain: "crwn-db-f82ca.firebaseapp.com",
    databaseURL: "https://crwn-db-f82ca.firebaseio.com",
    projectId: "crwn-db-f82ca",
    storageBucket: "crwn-db-f82ca.appspot.com",
    messagingSenderId: "1051033536005",
    appId: "1:1051033536005:web:7f922fd2c0e07b33563e6c",
    measurementId: "G-W5M73S4ZLL"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })

        } catch(err) {
            console.log("Error creating user.", err.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
