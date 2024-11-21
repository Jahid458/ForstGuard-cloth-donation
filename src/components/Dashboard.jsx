// import { useContext } from 'react';
// import { authContext } from './AuthProvider'

import { useContext } from "react";
import { authContext } from "./AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {

  const { user } = useContext(authContext);

 
  return (
    
    <div className="text-center lg:py-10 lg:px-9  mt-14 mb-14 bg-gray-50 shadow-xl rounded-lg max-w-md mx-auto space-y-4 flex flex-col">
               <h2 className="font-semibold text-xl">Welcome, {user?.displayName}!</h2>
               <div className="flex justify-center">
                   {
                       user && <img
                       src={user?.photoURL}
                       alt="Profile"
                       className="w-[150px] rounded-[50%] border-4 border-blue-500 shadow-lg"
                   />
                   }
               </div>
              <div>
              <p><strong>Name:</strong> {user?.displayName}</p>
              <p><strong>Email:</strong> {user?.email}</p>
              </div>
               <Link to="/updateProfile" className="btn btn-info  text-white text-xl">
                   Update Profile
               </Link>
           </div>
  );
};

export default Dashboard;
