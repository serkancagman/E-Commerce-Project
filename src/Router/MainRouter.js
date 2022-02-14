import ComputerCategory from "components/Pages/ComputerCategory";
import { Home } from "components/Pages/Home";
import ProductInnerPage from "components/Pages/ProductInnerPage";
import ProfileMainPage from "components/Pages/ProfileMainPage";
import Checkout from "components/CartCheckout/Checkout";
import React from "react";
import { Routes, Route} from "react-router-dom";
import {ProtectedAdminRoute,ProtectedRoute, ProtectedAdminLogin,ProtectedLoginRegisterRoute} from "./ProtectedRoute";
import AdminLogin from "components/Admin/AdminComponents/AdminLogin/AdminLogin";
import AdminDashboardPage from "components/Pages/AdminPages/AdminDashboardPage";
import AdminOrdersPage from "components/Pages/AdminPages/AdminOrdersPage";
import AdminProductsPage from "components/Pages/AdminPages/AdminProductsPage";
import RegisterPage from "components/Pages/RegisterPage";
import LoginPage from "components/Pages/LoginPage";
import AdminAddProductPage from "components/Pages/AdminPages/AdminAddProductPage";
import AdminEditProductPage from "components/Pages/AdminPages/AdminEditProductPage";


const MainRouter = () => {

  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<ProtectedLoginRegisterRoute><RegisterPage/></ProtectedLoginRegisterRoute>} />
        <Route path="/login" element={<ProtectedLoginRegisterRoute><LoginPage/></ProtectedLoginRegisterRoute>} />
        <Route path="/product/:product_id" element={<ProductInnerPage />} />
        <Route path="/computer&laptops" element={<ComputerCategory />} />
        <Route path="/profile" element={<ProtectedRoute> <ProfileMainPage /> </ProtectedRoute>}/>
        <Route path="/admin" element={<ProtectedAdminLogin><AdminLogin /></ProtectedAdminLogin>} />
        <Route path="/admin/dashboard" element={<ProtectedAdminRoute><AdminDashboardPage /></ProtectedAdminRoute>}/>
        <Route path="/admin/orders" element={<ProtectedAdminRoute><AdminOrdersPage/></ProtectedAdminRoute>}/>
        <Route path="/admin/products/:product_id" element={<ProtectedAdminRoute><AdminEditProductPage /></ProtectedAdminRoute>}/>
        <Route path="/admin/products" element={<ProtectedAdminRoute><AdminProductsPage /></ProtectedAdminRoute>}/>
        <Route path="/admin/add/products" element={<ProtectedAdminRoute><AdminAddProductPage /></ProtectedAdminRoute>}/>
        <Route path="/cartcheckout" element={<Checkout />} /> 
      </Routes>
    </>
  );
};

export default MainRouter;
