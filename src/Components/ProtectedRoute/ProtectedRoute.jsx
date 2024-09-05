import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

  // If the user is not logged in, redirect them to the login page
  if (!isLoggedIn) {
    return <Navigate to="/admindashboard/adminlogin" state={{ from: location }} />;
  }

  // If the user is logged in, render the children components
  return children;
};

export default ProtectedRoute;
