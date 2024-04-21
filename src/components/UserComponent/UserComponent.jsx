import React from 'react';
import { useUser } from '../UserProvider/UserProvider.jsx';

const UserComponent = () => {
  const { user, updateUser } = useUser();

  const handleLogin = () => {
    updateUser({ name: 'John Doe', email: 'john.doe@example.com' });
  };

  const handleLogout = () => {
    updateUser(null);
  };

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>Please log in.</p>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default UserComponent;
