import React, { createContext, useEffect } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';




 export const AuthContext = createContext(null);
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();

 const Githubprovider = new GithubAuthProvider();



 

const Authprovider = ({children})=> {
    const [user, setuser] = useState(null);
    const[loding, setloding] = useState(true);

    const SignInRegintatoin = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password);

    }
    const Loginemailpassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const gogoleprover = () =>{
        return signInWithPopup(auth, provider)
    }
    const GithubSing = () =>{
        return signInWithPopup(auth, Githubprovider)

    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(() => {

      const unsubscribe =  onAuthStateChanged (auth, currentuser=>{
            console.log('auth sate change', currentuser)
            setuser(currentuser)
        })
        return () =>{
            unsubscribe();
        };


    }, [])


    const authinfo = {
        user, 
        SignInRegintatoin,
        Loginemailpassword,
        gogoleprover,
        GithubSing,
        logOut
         


    }



    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;