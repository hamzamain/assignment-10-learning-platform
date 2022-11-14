import React, { createContext, useEffect } from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { getFromStorage } from "../../Storage/Storage";

const auth = getAuth(app);

export const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [premium, setPremium] = useState(false);
  //   const user = { displayName: "aull" };

  useEffect(() => {
    const id = user?.uid;
    const users = getFromStorage();
    //users is an [array]
    const currentUser = users.find((user) => user.id == id);
    if (currentUser) {
      setPremium(true);
    }
  }, [user]);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const createUserWithProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const verify = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const UserProfileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUserWithProvider,
    signIn,
    logOut,
    createUser,
    UserProfileUpdate,
    verify,
    loading,
    premium,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
