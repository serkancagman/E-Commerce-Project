import React from "react";
import {useQuery } from "react-query";
import { trendProductAPI } from "../../API/trendProductAPI";
import ProductSlider from "components/ProductSlider/ProductSlider";
import { SaleTrend } from "components";

 const TrendProducts = () => {
  const {
    data,
    error,
    isLoading,
  } = useQuery("repoData", trendProductAPI)

  return (
    <>
      <ProductSlider
        header="Hot Trend Products"
        data={data}
        error={error}
        loading={isLoading}
      />
      <SaleTrend />
    </>
  );
};
export default TrendProducts;