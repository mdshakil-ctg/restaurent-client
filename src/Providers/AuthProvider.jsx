import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup , signOut, updateProfile } from 'firebase/auth';
import { app } from '../Firebase/firebase.config';
import useAxiosPublic from './../Hooks/useAxiosPublic';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();
    const axiosPublic = useAxiosPublic();
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {displayName: name})
    }

    const googleSingup = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const facebookSingup = () =>{
        setLoading(true)
        return signInWithPopup(auth, fbProvider)
    }

    const LogoutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            const userInfo = {email: currentUser?.email}
            if(currentUser){
                setUser(currentUser);
                axiosPublic.post('/jwt', userInfo, {withCredentials:true})
                .then(() => {})
            }
            setLoading(false);
            setUser(currentUser);
        })
        return () => unsubscribe();
        
    },[auth,axiosPublic])

    const authInfo = {
        user,
        createUser,
        LoginUser,
        updateUser,
        loading,
        setLoading,
        googleSingup,
        facebookSingup,
        LogoutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;