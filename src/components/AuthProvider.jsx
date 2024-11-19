/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import auth from './../firebase/firebase.config';


export const authContext = createContext();





const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);


  const handleResgister = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  
  const handleLogin = (email,password)=>{
    return  signInWithEmailAndPassword(auth,email,password)
  
   }
  
   const handleLogout = () =>{
    return  signOut(auth)
   }





   useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
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
    setUser
  }
  
  return (
    <div>
     <authContext.Provider value={authInfo}> {children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;