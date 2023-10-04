import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import globalAuth from '../firebase/firebase.config';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    return signInWithPopup(globalAuth, googleProvider);
  };

  const githubSignIn = () => {
    return signInWithPopup(globalAuth, githubProvider);
  };

  const signInEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(globalAuth, email, password);
  };

  const logInEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(globalAuth, email, password);
  };

  const emailVerification = () => {
    return sendEmailVerification(globalAuth.currentUser);
  };

  const logOut = () => {
    return signOut(globalAuth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(globalAuth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const info = {
    googleSignIn,
    user,
    logOut,
    githubSignIn,
    signInEmailPassword,
    emailVerification,
    logInEmailPassword,
  };

  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
