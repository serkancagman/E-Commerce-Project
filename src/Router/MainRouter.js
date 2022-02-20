import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  ProductDetailPage,
  ComputerCategoryPage,
  ProfileMainPage,
  OrderSuccessPage,
  OrderProcessPage,
  RegisterPage,
  LoginPage,
} from "components/Pages";
import {
  ProtectedAdminRoute,
  ProtectedRoute,
  ProtectedAdminLogin,
  ProtectedLoginRegisterRoute,
  ProtectedCartRoute,
  ProtectedOrderSuccessRoute,
} from "./ProtectedRoute";
import {
  AdminLoginPage,
  AdminDashboardPage,
  AdminOrdersPage,
  AdminProductsPage,
  AdminAddProductPage,
  AdminEditProductPage,
} from "components/Pages/AdminPages";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={
            <ProtectedLoginRegisterRoute>
              <RegisterPage />
            </ProtectedLoginRegisterRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedLoginRegisterRoute>
              <LoginPage />
            </ProtectedLoginRegisterRoute>
          }
        />
        <Route path="/product/:product_id" element={<ProductDetailPage />} />
        <Route path="/computer&laptops" element={<ComputerCategoryPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              {" "}
              <ProfileMainPage />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedAdminLogin>
              <AdminLoginPage />
            </ProtectedAdminLogin>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardPage />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <ProtectedAdminRoute>
              <AdminOrdersPage />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/products/:product_id"
          element={
            <ProtectedAdminRoute>
              <AdminEditProductPage />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <ProtectedAdminRoute>
              <AdminProductsPage />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/add/products"
          element={
            <ProtectedAdminRoute>
              <AdminAddProductPage />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/cartcheckout"
          element={
            <ProtectedCartRoute>
              <OrderProcessPage />
            </ProtectedCartRoute>
          }
        />
        <Route
          path="/order-success"
          element={
            <ProtectedOrderSuccessRoute>
              <OrderSuccessPage />
            </ProtectedOrderSuccessRoute>
          }
        />
      </Routes>
    </>
  );
};

export default MainRouter;
