/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile  } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import auth from './../firebase/firebase.config';


export const authContext = createContext();

const AuthProvider = ({children}) => {
  const googleProvider = new GoogleAuthProvider();
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  // console.log(user)
  const handleResgister = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    
  }
  
  const handleLogin = (email,password)=>{
    setLoading(true)
    return  signInWithEmailAndPassword(auth,email,password)
  
   }



    const googleLogIn = ()=>{
      setLoading(true)
     return signInWithPopup(auth,googleProvider)
      
    } 
    const resetPassword = (email) =>{
      setLoading(true)
      return sendPasswordResetEmail(auth,email)
  }
  
   const handleLogout = () =>{
    setLoading(true)
    return  signOut(auth)
   }

   const updateUserProfile  = (updatedData) =>{
         setLoading(true)
        return updateProfile(auth.currentUser, updatedData)
   }



   useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      setLoading(false)

    })
    return ()=>{
      unsubscribe()
    }

   },[])



  const authInfo ={
    handleResgister,
    handleLogin,
    handleLogout,
    user,
    setUser,
    googleLogIn,
    updateUserProfile,
    resetPassword,
    loading
    
  }
  
  return (
    <div>
     <authContext.Provider value={authInfo}> {children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;