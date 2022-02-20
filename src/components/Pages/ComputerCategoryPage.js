import React from "react";
import bannerImage from "images/computerCategoryBanner.jpg";
import { useInfiniteQuery } from "react-query";
import { getProductByCategory } from "API/trendProductAPI";
import { ComputerCategoryItem } from "components/Helpers/SubCatItem";
import { Header, MainCategory, FooterMain } from "components";
const ComputerCategoryPage = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("products", getProductByCategory, {
    getNextPageParam: (lastGroup, allGroup) => {
      const pageParam = lastGroup?.length === 12;

      if (!pageParam) {
        return;
      }

      return allGroup.length + 1;
    },
  });

  return (
    <>
      <Header />
      <MainCategory
        bannerImg={bannerImage}
        subCatItem={ComputerCategoryItem}
        status={status}
        data={data}
        error={error}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetching={isFetching}
        isFetchingNextPage={isFetchingNextPage}
      />
      <FooterMain />
    </>
  );
};

export default ComputerCategoryPage;
