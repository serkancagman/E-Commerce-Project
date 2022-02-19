import React from "react";
import { Navigate, } from "react-router-dom";
import { AuthLoginContext } from "context/AuthLoginContext";
import { ShopCartContext } from "context/ShopCartContext";
import { ToOrderContext } from "context/ToOrderContext";

export const ProtectedRoute = ({children}) => {
  const { isLoggedIn } = React.useContext(AuthLoginContext);
  
  return isLoggedIn ? children : <Navigate to="/" />;
};



export  const ProtectedAdminRoute = ({children}) => {
  const { isAdmin } = React.useContext(AuthLoginContext)
  return  isAdmin ?  children  : <Navigate to="/" /> 
}
export const ProtectedAdminLogin = ({children}) => {
  const { isAdmin } = React.useContext(AuthLoginContext)
  return  isAdmin ? <Navigate to="/admin/dashboard" /> : children 
}
export const ProtectedLoginRegisterRoute = ({children}) => {
  const { isLoggedIn } = React.useContext(AuthLoginContext);
  return isLoggedIn ? <Navigate to="/" /> : children;
}
export const ProtectedCartRoute = ({children}) => {
  const { cartItems } = React.useContext(ShopCartContext);
  return cartItems.length > 0 ? children : <Navigate to="/" />;
}
export const ProtectedOrderSuccessRoute = ({children}) => {
  const { orderIsSuccess } = React.useContext(ToOrderContext);
  return orderIsSuccess !== true ? <Navigate to="/" /> : children;
}