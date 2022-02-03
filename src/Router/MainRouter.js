import { FooterMain } from "components/Footer/FooterMain";
import { Header } from "components/Header/Header";
import ComputerCategory from "components/Pages/ComputerCategory";
import { Home } from "components/Pages/Home";
import ProductDetail from "components/ProductDetail/ProductDetail";
import Profile from "components/Profile/Profile";
import React from "react";
import { Routes, Route } from "react-router-dom";

const MainRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:product_id" element={<ProductDetail />} />
        <Route path="/computer&laptops" element={<ComputerCategory />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <FooterMain />
    </>
  );
};

export default MainRouter;
