import ComputerCategory from "components/Pages/ComputerCategory";
import { Home } from "components/Pages/Home";
import ProductInnerPage from "components/Pages/ProductInnerPage";
import ProfileMainPage from "components/Pages/ProfileMainPage";
import Checkout from "components/CartCheckout/Checkout";
import React from "react";
import { Routes, Route} from "react-router-dom";
import {ProtectedAdminRoute,ProtectedRoute, ProtectedAdminLogin} from "./ProtectedRoute";
import AdminLogin from "components/Admin/Pages/AdminLogin/AdminLogin";
import AdminDashboardPage from "components/Pages/AdminPages/AdminDashboardPage";
import AdminOrdersPage from "components/Pages/AdminPages/AdminOrdersPage";
import AdminProductsPage from "components/Pages/AdminPages/AdminProductsPage";

const MainRouter = () => {

  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:product_id" element={<ProductInnerPage />} />
        <Route path="/computer&laptops" element={<ComputerCategory />} />
        <Route path="/profile" element={<ProtectedRoute> <ProfileMainPage /> </ProtectedRoute>}/>
        <Route path="/admin" element={<ProtectedAdminLogin><AdminLogin /></ProtectedAdminLogin>} />
        <Route path="/admin/dashboard" element={<ProtectedAdminRoute><AdminDashboardPage /></ProtectedAdminRoute>}/>
        <Route path="/admin/orders" element={<ProtectedAdminRoute><AdminOrdersPage/></ProtectedAdminRoute>}/>
      
        <Route path="/admin/products/:product_id" element={<ProtectedAdminRoute><AdminDashboardPage /></ProtectedAdminRoute>}/>
        <Route path="/admin/products" element={<ProtectedAdminRoute><AdminProductsPage /></ProtectedAdminRoute>}/>
        <Route path="/cartcheckout" element={<Checkout />} /> 
      </Routes>
    </>
  );
};

export default MainRouter;
