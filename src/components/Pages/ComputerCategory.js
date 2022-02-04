import MainCategory from "components/CategoryMain/MainCategory";
import React from "react";
import bannerImage from "images/computerCategoryBanner.jpg";
import { useInfiniteQuery } from "react-query";
import { getProductByCategory } from "API/trendProductAPI";
import { FooterMain } from "components/Footer/FooterMain";
import { Header } from "components/Header/Header";
const ComputerCategory = () => {
  const subCatItem = [
    {
      id: 1,
      subCatName: "Computer Accessories",
      subCatLink: "/computer&laptops/computer-accessories",
    },
    {
      id: 2,
      subCatName: "Apple Macbook",
      subCatLink: "/computer&laptops/apple-macbook",
    },
    {
      id: 3,
      subCatName: "Cameras DSLR/SLR",
      subCatLink: "/computer&laptops/cameras-dslr-slr",
    },
    {
      id: 4,
      subCatName: "Computer",
      subCatLink: "/computer&laptops/computer-components",
    },
    {
      id: 5,
      subCatName: "Travel Cameras",
      subCatLink: "/computer&laptops/travel-cameras",
    },
    {
      id: 6,
      subCatName: "Printers & Accessories",
      subCatLink: "/computer&laptops/printers-accessories",
    },
  ];

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
        subCatItem={subCatItem}
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

export default ComputerCategory;
