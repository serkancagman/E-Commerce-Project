import React from "react";
import { Navigate, } from "react-router-dom";
import { AuthLoginContext } from "context/AuthLoginContext";

export const ProtectedRoute = ({children}) => {
  const { isLoggedIn } = React.useContext(AuthLoginContext);
  
  return isLoggedIn ? children : <Navigate to="/" />;
};


export  const ProtectedAdminRoute = ({children}) => {
  const { isAdmin } = React.useContext(AuthLoginContext)
  return  isAdmin !== "admin" ? <Navigate to="/" /> : children;
}

