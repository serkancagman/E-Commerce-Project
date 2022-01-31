import { FooterMain } from "components/Footer/FooterMain";
import { Header } from "components/Header/Header";
import { Home } from "components/Pages/Home";
import ProductDetail from "components/Pages/ProductDetail";
import React from "react";
import { Routes, Route } from "react-router-dom";

const MainRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductDetail />} />
      </Routes>
      <FooterMain />
    </>
  );
};

export default MainRouter;
