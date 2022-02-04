import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthLoginContext } from 'context/AuthLoginContext';
const ProtectedRoute = ({children}) => {

  const {isLoggedIn } = React.useContext(AuthLoginContext);


  return isLoggedIn ? children : <Navigate to="/" />

  
  
  
  
  
};

export default ProtectedRoute;
