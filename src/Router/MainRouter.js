import ComputerCategory from "components/Pages/ComputerCategory";
import { Home } from "components/Pages/Home";
import ProductInnerPage from "components/Pages/ProductInnerPage";
import ProfileMainPage from "components/Pages/ProfileMainPage";

import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:product_id" element={<ProductInnerPage />} />
        <Route path="/computer&laptops" element={<ComputerCategory />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileMainPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default MainRouter;
