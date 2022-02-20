import React from "react";
import { useQuery } from "react-query";
import { trendProductAPI } from "../../API/trendProductAPI";
import ProductSlider from "components/ProductSlider/ProductSlider";


const SpecialProducts = () => {
  const {
    data,
    error,
    isLoading
  } = useQuery("repoData", trendProductAPI);

  return (
    <>
      <ProductSlider
        header="Special Products"
        data={data}
        error={error}
        loading={isLoading}
      />
      
    </>
  );
};
export default SpecialProducts;