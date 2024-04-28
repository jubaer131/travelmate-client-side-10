import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "./Firebase.config";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";





export const authContest = createContext()
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState('')
    const [loading, setloading] = useState(true)

    const googleprovider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const creatregistation = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const creatUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignin = () => {
        setloading(true)
        return signInWithPopup(auth, googleprovider)
    }

    const githubSignin = () => {
        setloading(true)
        return signInWithPopup(auth, GithubProvider)
    }

    const logout = () => {
        setloading(true)
        return signOut(auth)
    }


    const updateProfilePicture = (name, photo) => {

        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        })
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setuser(currentuser)
            setloading(false)
        })
        return () => {
            unsubscribe()
        }


    }, [])

    const authinfo = { creatUser, creatregistation, user, logout, updateProfilePicture, loading, setloading, googleSignin, githubSignin }


    return (
        <div>
            <authContest.Provider value={authinfo}>
                {children}
            </authContest.Provider>
        </div>
    );
};

export default AuthProvider;