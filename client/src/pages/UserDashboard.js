import React, { useContext } from 'react';
import { UserContext } from '../components/context/UserContext';

const UserDashboard = () => {
  const msg = useContext(UserContext);
  return (
    <div>
      <div>UserDashboardj</div>
      <div>{msg}</div>
    </div>
  );
};

export default UserDashboard;
