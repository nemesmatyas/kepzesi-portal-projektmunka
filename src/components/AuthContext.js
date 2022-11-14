import { useState } from "react";
import { createContext, useContext, useEffect } from "react";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase-config";
import { doc, setDoc } from "firebase/firestore";

export const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        };
    },[])

    const register = (registerEmail, registerPassword, registerLastname, registerFirstname,
        registerIdnumber, registerPosition, registerStartdate) => {

        createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then(async (result) => {
        const userRef = doc(db, "users", result.user.uid);
        await setDoc(userRef, 
            {Firstname: registerFirstname, 
            Lastname: registerLastname,
            email: registerEmail,
            identification_number: registerIdnumber,
            position: registerPosition,
            start_date: registerStartdate});
        })
        .catch((error) => {
            console.log(error.message);
        });         
    };

    const login = (loginEmail, loginPassword) => {
        return signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    };

    const logout = () => {
        return signOut(auth);
    };

    return (
        <UserContext.Provider value ={{user, logout, login, register}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};