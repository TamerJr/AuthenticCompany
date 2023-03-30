import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {doc,setDoc} from "firebase/firestore"
import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
const userContext = createContext();
export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setDoc(doc(db,"Courses",email),{
        userList:[]
      })
      navigate("/account");
    } catch (err) {
      alert(err.message);
    } finally {
      setUser(null);
    }
  };
  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };
  useEffect(() => {
    const userIn = () => {
      onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
    };
    return () => userIn();
  }, []);
  const LogOut = () => {
    try {
      signOut(auth);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <userContext.Provider
      value={{ user, logIn, signUp, LogOut, setEmail, setPassword, user }}
    >
      {children}
    </userContext.Provider>
  );
};

export default userContext;
