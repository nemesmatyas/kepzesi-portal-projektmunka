import { useState } from "react";
import { createContext, useContext, useEffect } from "react";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    const login = (loginEmail, loginPassword) => {
        return signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    };

    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        };
    },[])

    return (
        <UserContext.Provider value ={{user, logout, login}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};