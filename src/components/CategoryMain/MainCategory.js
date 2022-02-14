import React from "react";
import { AsideItems } from "components/Header/AsideItems";
import "./style/maincategory.css";
import { Link } from "react-router-dom";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { MdTableRows } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
const MainCategory = ({
  bannerImg,
  subCatItem,
  data,
  status,
  error,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isFetching,
}) => {
  const [showInfo, setShowInfo] = React.useState(false);

  if (status === "loading") {
    return (
      <div className="text-center w-100">
        <iframe title="..." src="https://embed.lottiefiles.com/animation/93759"></iframe>
      </div>
    );
  }

  if (status === "error") {
    return <div className="text-center w-100">{error.message}</div>;
  }

  console.log(data);
  return (
    <section id="productCategory" className="my-3">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-3 col-lg-3">
            <div className="leftMenuInner">
              <div className="leftMenuHeader">
                <h5 className="leftMenuTitle">HOME</h5>
              </div>
              <ul className="tree-main">
                <AsideItems />
              </ul>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 h-100">
            <div className="productCatBanner">
              <img src={bannerImg} className="img-fluid" alt="Loading" />

              <h1 className="catMainHeader">COMPUTER & LAPTOPS</h1>
              <div className={`categoryInfo ${showInfo ? "showAllText" : ""}`}>
                <span className="boldSubHeader">
                  You will find here all computer and laptops.
                </span>
                <p className="bannerInnerText">
                  Morbi pretium felis sit amet pellentesque hendrerit. Sed ac
                  odio convallis sapien efficitur dictum in sit amet orci. Sed
                  id nunc sed velit imperdiet luctus. Cras lobortis velit id
                  turpis placerat egestas. Etiam at dignissim nibh.
                </p>
                <p className="bannerInnerText">
                  Morbi pretium felis sit amet pellentesque hendrerit. Sed ac
                  odio convallis sapien efficitur dictum in sit amet orci. Sed
                  id nunc sed velit imperdiet luctus. Cras lobortis velit id
                  turpis placerat egestas. Etiam at dignissim nibh.
                </p>
                <span className="boldSubHeader">
                  You will find here all computer and laptops.
                </span>
                <p className="bannerInnerText">
                  Morbi pretium felis sit amet pellentesque hendrerit. Sed ac
                  odio convallis sapien efficitur dictum in sit amet orci. Sed
                  id nunc sed velit imperdiet luctus. Cras lobortis velit id
                  turpis placerat egestas. Etiam at dignissim nibh.
                </p>
                <p className="bannerInnerText">
                  Morbi pretium felis sit amet pellentesque hendrerit. Sed ac
                  odio convallis sapien efficitur dictum in sit amet orci. Sed
                  id nunc sed velit imperdiet luctus. Cras lobortis velit id
                  turpis placerat egestas. Etiam at dignissim nibh.
                </p>
              </div>
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="showMoreBtn"
              >
                {showInfo ? <> <FiArrowUp/> SHOW LESS </>  : <> <FiArrowDown/> SHOW MORE </>}
              </button>

              <div className="subCategories">
                <h6 className="subCatHeader my-3">SUBCATEGORIES</h6>
                <div className="row g-4 justify-content-center align-items-center text-center">
                  {subCatItem.map((subCat) => {
                    return (
                      <div
                        key={subCat.id}
                        className="col-md-4 col-sm-6 col-lg-2"
                      >
                        <div className="subCatItem">
                          <Link to="/" className="subCatLink">
                            {subCat.subCatName}
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="productTopLine my-3">
                <div className="my-1 d-flex align-items-center justify-content-between ">
                  <span className="allproductLength">
                    There are 4 products.
                  </span>
                  <div className="productBoxStyle d-flex justify-content-center align-items-center">
                    <span className="boxStyleIcon gridIcon">
                      <BsFillGrid3X3GapFill />
                    </span>
                    <span className="boxStyleIcon listIcon">
                      <FaListUl />
                    </span>

                    <span className="boxStyleIcon tableIcon">
                      <MdTableRows />
                    </span>
                  </div>
                  <div className="sortProductWrapper d-flex justify-content-center align-items-center">
                    <span className="sortText">Sort by:</span>
                    <select
                      className="form-select sortProductSelect"
                      aria-label="Default select example"
                    >
                      <option selected>Select option</option>
                      <option value="1">Best sellers</option>
                      <option value="2">Relevance</option>
                      <option value="3">Name, A to Z</option>
                      <option value="3">Name, Z to A</option>
                      <option value="3">Price, low to high</option>
                      <option value="3">Price, high to low</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="productListWrapper">
              <div className="row g-4 justify-content-center align-items-center">
                {data.pages.map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      {item.map((mainData) => {
                        return (
                          <div key={mainData._id} className="col-md-3 col-lg-3">
                            <article className="product-box">
                              <div className="product-img">
                                <Link to={`/product/${mainData._id}`}>
                                  
                                    <img
                                      className="img-fluid"
                                      src={mainData.photos[0]}
                                      type="image/vnd.ms-photo"
                                      alt="..."
                                    />
                                
                                  <div className="show-product">
                                    <FaRegEye
                                      color="#E91E63"
                                      size={30}
                                      className="eye-icon"
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className="product-titles text-center">
                                <Link
                                  to={`/product/${mainData._id}`}
                                  className="product-title"
                                >
                                  {mainData.title}
                                </Link>
                              </div>
                              <div className="product-price my-3 w-100 d-flex justify-content-between align-items-center">
                                <span className="price mx-2">
                                  ${mainData.price}{" "}
                                </span>

                                <button className="buy-btn mx-2">BUY</button>
                              </div>
                            </article>
                          </div>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
                <div className="loadMoreArea text-center">
                <button
                  className="loadMoreBtn"
                  onClick={() => fetchNextPage()}
                  disabled={!hasNextPage || isFetchingNextPage}
                >
                  {isFetchingNextPage
                    ? "Loading more..."
                    : hasNextPage
                    ? "Load More"
                    : "Nothing more to load"}
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCategory;
