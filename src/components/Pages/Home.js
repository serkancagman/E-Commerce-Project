
import React from "react";
import { Banner } from "../Banner/Banner";
import { FeaturedCategories } from "../FeaturedCategories/FeaturedCategories";
import { FeaturedProducts } from "../FeaturedProducts/FeaturedProducts";
import { Premium } from "../Premium/Premium";
import { SpecialProducts } from "../SpecialProducts/SpecialProducts";
import { TrendProducts } from "../TrendProducts/TrendProducts";
import { FooterMain } from "components/Footer/FooterMain";
import { Header } from "components/Header/Header";

export const Home = () => {
  
  return (
    <>
      <Header />
      <Banner />
      <TrendProducts />
      <FeaturedProducts/>
      <Premium/>
      <SpecialProducts header="Special Products" />
      <FeaturedCategories/>
      <FooterMain />
    </>
  );
};
