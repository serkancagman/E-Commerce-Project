import React from "react";
import {
  Header,
  Banner,
  TrendProducts,
  FooterMain,
  FeaturedCategories,
  FeaturedProducts,
  Premium,
  SpecialProducts,
} from "components";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <TrendProducts />
      <FeaturedProducts />
      <Premium />
      <SpecialProducts header="Special Products" />
      <FeaturedCategories />
      <FooterMain />
    </>
  );
};
export default Home;
