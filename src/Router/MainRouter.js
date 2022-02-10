import ComputerCategory from "components/Pages/ComputerCategory";
import { Home } from "components/Pages/Home";
import ProductInnerPage from "components/Pages/ProductInnerPage";
import ProfileMainPage from "components/Pages/ProfileMainPage";
import Checkout from "components/CartCheckout/Checkout";
import React from "react";
import { Routes, Route,useMatch} from "react-router-dom";



import Admin from "components/Pages/Admin";

import {ProtectedAdminRoute,ProtectedRoute, ProtectedAdminLogin} from "./ProtectedRoute";

import AdminLogin from "components/Admin/Pages/AdminLogin/AdminLogin";

const MainRouter = () => {

  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:product_id" element={<ProductInnerPage />} />
        <Route path="/computer&laptops" element={<ComputerCategory />} />
        <Route path="/profile" element={<ProtectedRoute> <ProfileMainPage /> </ProtectedRoute>}/>
        <Route path="/admin" element={<ProtectedAdminLogin><AdminLogin /></ProtectedAdminLogin>} />
        <Route path="/admin/dashboard" element={<ProtectedAdminRoute><Admin /></ProtectedAdminRoute>}/>
        <Route path="/admin/orders" element={<ProtectedAdminRoute><Admin /></ProtectedAdminRoute>}/>
        <Route path="/admin/products" element={<ProtectedAdminRoute><Admin /></ProtectedAdminRoute>}/>
        <Route path="/cartcheckout" element={<Checkout />} /> 
      </Routes>
    </>
  );
};

export default MainRouter;
