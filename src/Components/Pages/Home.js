import React from "react";
import { Banner } from "../Banner/Banner";
import { FeaturedProducts } from "../FeaturedProducts/FeaturedProducts";
import { TrendProducts } from "../TrendProducts/TrendProducts";

export const Home = () => {
  return (
    <>
      <Banner />
      <TrendProducts />
      <FeaturedProducts/>
    </>
  );
};
