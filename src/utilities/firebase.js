import { useCallback, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import {connectDatabaseEmulator, getDatabase, onValue, ref, update } from 'firebase/database';
import {connectAuthEmulator, signInWithCredential, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBMjzMrLke1ZUqCPog5qFqCHJ4YQhHmGzU",
    authDomain: "tutorial-f4051.firebaseapp.com",
    databaseURL: "https://tutorial-f4051-default-rtdb.firebaseio.com",
    projectId: "tutorial-f4051",
    storageBucket: "tutorial-f4051.appspot.com",
    messagingSenderId: "825107131622",
    appId: "1:825107131622:web:9ba5f02b33ed675df49f27"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const database = getDatabase(firebase);

if (!window.EMULATION && process.env.REACT_APP_EMULATE) {
  //connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectDatabaseEmulator(database, "127.0.0.1", 9000);

  /*signInWithCredential(auth, GoogleAuthProvider.credential(
    '{"sub": "qEvli4msW0eDz5mSVO6j3W7i8w1k", "email": "tester@gmail.com", "displayName":"Test User", "email_verified": true}'
  ));*/
  
  window.EMULATION = true;
}

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};

export const signInWithGoogle = () => {
    signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
  };
  
  const firebaseSignOut = () => signOut(getAuth(firebase));
  
export { firebaseSignOut as signOut };
  
export const useAuthState = () => {
  const [user, setUser] = useState();
  
  useEffect(() => (
    onAuthStateChanged(getAuth(firebase), setUser)
  ));

  return [user];
};