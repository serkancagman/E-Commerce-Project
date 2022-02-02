import MainCategory from "components/CategoryMain/MainCategory";
import React from "react";
import bannerImage from "images/computerCategoryBanner.jpg";
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

  return (
    <>
      <MainCategory bannerImg={bannerImage} subCatItem={subCatItem} />
    </>
  );
};

export default ComputerCategory;
