import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyASR6PKvHKCCZK2qovUyFEZb3yDZrcH3lY",
  authDomain: "surge-clothingdb.firebaseapp.com",
  projectId: "surge-clothingdb",
  storageBucket: "surge-clothingdb.appspot.com",
  messagingSenderId: "347377518603",
  appId: "1:347377518603:web:bbdf552e1c1d369a0e1f0e",
  measurementId: "G-QYWF880YKL",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get()
  // console.log(snapshot);

  if(!snapshot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating User', error.message);
    }

  }
  
  return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
