import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn'); // Remove the login state
    window.location.href = '/'; // Redirect to home or login page
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
