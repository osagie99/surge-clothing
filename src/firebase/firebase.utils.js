// Pulling in firebase utility library located in firebase/app
// we need the base import which is firebase in order to have access to the firestore and auth libraries

import firebase from "firebase/app";

// import firestore for the database

import "firebase/firestore";

// import firebase/auth for the authentication

import "firebase/auth";

// bring in the config file from firebase online

const config = {
  apiKey: "AIzaSyASR6PKvHKCCZK2qovUyFEZb3yDZrcH3lY",
  authDomain: "surge-clothingdb.firebaseapp.com",
  projectId: "surge-clothingdb",
  storageBucket: "surge-clothingdb.appspot.com",
  messagingSenderId: "347377518603",
  appId: "1:347377518603:web:bbdf552e1c1d369a0e1f0e",
  measurementId: "G-QYWF880YKL",
};

// initialize firebase with the config file
// it connects the firebase on our local machine to the firebase online

firebase.initializeApp(config);

// Because we imported firebase/auth we have access to the auth() method
// We export auth so anywhere we need it in out application we can import it

export const auth = firebase.auth();

// Because we imported firestore we have access to the firestore() method
// We export firestore so anywhere we need it in out application we can import it

export const firestore = firebase.firestore();

// we create our GoogleAuthProvider which we have access to throught the auth library

const provider = new firebase.auth.GoogleAuthProvider();

// Set the custom parameter which allows a user to select account in order not to just use the primary account

provider.setCustomParameters({ prompt: "select_account" });

// we export the signInWithGoogle and pass the provider to it in order to use it in differnt parts of out application

export const signInWithGoogle = () => auth.signInWithPopup(provider);

// This is to store the user object we get back from google auth into our databse
// Because it will be recorded in our auth tab on firebase but not saved in our firestore i.e. database
// it takes to argument the user object ere recieving from the google and any other additiomal data we might need
// because we make a call to the firestore its an async function

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // If there is no user authenticated
  if (!userAuth) return;
  // This is to get the user reference and equate it to a variable
  // A userRef does not return data it only returns properties that tell us about the data
  //  We use firestore.doc to create , retrieve, update, delete from out database
  // we have the .set(), .get(), .update(), .delete() respectively  
  // using the userAuth object gotten back from out google auth we check to see if the uid already exists 
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // we get document snapshot from our document referrence
  // the snapshot returns boolean to tell us if a document .exits() and .data() to get the actual data
  //  to query the database to check if a data exists
  const snapshot = await userRef.get();

  // console.log(snapshot);
// we check the exists method which returns a boolean true if exits and false if not exists
  if (!snapshot.exists) {
    // destructure the userAuth to pull out the displayName property and email since thats what we need in out database
    const { displayName, email } = userAuth;
    // createdAt to have a timestamp when the documents will be created
    const createdAt = new Date();
// try catch to check if the documents saves sucesfully or print the error if fail
    try {
      // refer to line 63-64 we use the .set() to create a new document inside out collection with the fields 
      // to store data inside our firebase
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating User", error.message);
    }
  }

  return userRef;
};

// export default firebase to give us access to other firebase utils which were not exported
export default firebase;
