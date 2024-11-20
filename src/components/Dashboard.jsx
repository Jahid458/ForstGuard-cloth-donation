import { useContext } from 'react';
import { authContext } from './AuthProvider'


const Dashboard = () => {
  const {user} = useContext(authContext)
  return (
    <div>
      <h2>Welcome to  {user.displayName}</h2>
    </div>
  );
};

export default Dashboard;
