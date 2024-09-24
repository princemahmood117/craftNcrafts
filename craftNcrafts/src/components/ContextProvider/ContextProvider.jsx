import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";


export const AuthContext = createContext(null)

const ContextProvider = ({children}) => {

    const [user,setUser] = useState(null)

    const [loading,setLoading] = useState(true);


    //create user
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

 
    // user login

    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);

    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider()

    const signInwithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }



     // observer
     useEffect(()=>{

        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false)

            console.log('observing current user inside useEffect', currentUser);
        })

        return ()=>{
            unSubscribe();
        };

    },[]);


    const authValues = {createUser,loading,user,signInUser,logOut,signInwithGoogle}
    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider >
    );
};

export default ContextProvider;