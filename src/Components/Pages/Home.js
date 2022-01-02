import React from "react";
import { Banner } from "../Banner/Banner";
import { FeaturedProducts } from "../FeaturedProducts/FeaturedProducts";
import { Premium } from "../Premium/Premium";
import { SpecialProducts } from "../SpecialProducts/SpecialProducts";
import { TrendProducts } from "../TrendProducts/TrendProducts";

export const Home = () => {
  return (
    <>
      <Banner />
      <TrendProducts />
      <FeaturedProducts/>
      <Premium/>
      <SpecialProducts/>
    </>
  );
};
