
import { useContext } from 'react';
import { authContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {user} = useContext(authContext)
  
     
        if(user && user?.email){
          return children
        }
            return <Navigate to="/login"></Navigate>

};

export default PrivateRoute;
