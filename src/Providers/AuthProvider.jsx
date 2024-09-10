import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, updateProfile } from 'firebase/auth';
import { app } from '../Firebase/firebase.config';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState('shakil');
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (data) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {displayName: data?.name, photoURL : data?.img})
    }

    const googleSingup = () =>{
        return signInWithPopup(auth, provider)
    }

    const facebookSingup = () =>{
        return signInWithPopup(auth, fbProvider)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            if(currentUser){
                setUser(currentUser);
            }
            setLoading(false);
        })
        return () => unsubscribe();
        
    },[auth])

    const authInfo = {
        user,
        createUser,
        updateUser,
        loading,
        setLoading,
        googleSingup,
        facebookSingup
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;