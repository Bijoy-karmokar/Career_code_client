import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import axios from 'axios';

const AuthProvider = ({children}) => {
     const [user,setUser] = useState(null);
     const [loading,setLoading] = useState(true);
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut =()=>{
        return signOut(auth)
    }
    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
            console.log("User Info",currentUser);
            
            if(currentUser?.email){
                const userData = {email:currentUser.email};
                axios.post('http://localhost:3000/jwt',userData,{
                    withCredentials:true
                })
                .then(res=>{
                    // console.log("Data is comming",res.data);
                    const token = res.data.token;
                    console.log("token",token);
                    
                })
                .catch(error=>{
                    console.log(error);
                })
            }
        })

        return ()=>{
          unSubscribe()
        }
    },[])

    const userInfo={
         user,
         loading,
         createUser,
         signInUser,
         logOut
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;