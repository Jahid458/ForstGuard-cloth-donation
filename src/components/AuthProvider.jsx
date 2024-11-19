/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile  } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import auth from './../firebase/firebase.config';


export const authContext = createContext();





const AuthProvider = ({children}) => {
  const googleProvider = new GoogleAuthProvider();
  const [user,setUser] = useState(null);


  const handleResgister = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  
  const handleLogin = (email,password)=>{
    return  signInWithEmailAndPassword(auth,email,password)
  
   }

    const googleLogIn = ()=>{
      signInWithPopup(auth,googleProvider)
      .then(res => {
        const user = res.user;
        console.log(user)
      })
      .catch(err =>{
        console.log(err)
      })
    } 




  
   const handleLogout = () =>{
    return  signOut(auth)
   }

   const updateUserProfile  = (updateData) =>{
        return updateProfile(auth.currentUser, updateData)
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
    setUser,
    googleLogIn,
    updateUserProfile
  }
  
  return (
    <div>
     <authContext.Provider value={authInfo}> {children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;