/* eslint-disable react/prop-types */

import { useContext } from 'react';
import { authContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {user,loading} = useContext(authContext)

  const location = useLocation();
        if(loading){
          return children
        }
     
        if(user && user?.email){
          return children
        }
            return <Navigate state={location.pathname} to="/login"></Navigate>

};

export default PrivateRoute;
