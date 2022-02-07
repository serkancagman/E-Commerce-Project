import ComputerCategory from "components/Pages/ComputerCategory";
import { Home } from "components/Pages/Home";
import ProductInnerPage from "components/Pages/ProductInnerPage";
import ProfileMainPage from "components/Pages/ProfileMainPage";
import Checkout from "components/CartCheckout/Checkout";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Admin from "components/Pages/Admin";

import {ProtectedAdminRoute} from "./ProtectedRoute";
import { ProtectedRoute } from "./ProtectedRoute";

const MainRouter = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:product_id" element={<ProductInnerPage />} />
        <Route path="/computer&laptops" element={<ComputerCategory />} />

        <Route path="/profile" element={<ProtectedRoute> <ProfileMainPage /> </ProtectedRoute>}/>

        <Route path="/admin" element={<ProtectedAdminRoute><Admin /></ProtectedAdminRoute>}/>
        <Route path="/cartcheckout" element={<Checkout />} /> 
      </Routes>
    </>
  );
};

export default MainRouter;
