import React from "react";
import "./featured.css";
import { FeaturedItems } from "../Helpers/FeaturedItems";
import { FaRegEye } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
export const FeaturedProducts = () => {
  return (
    <section>
      <div className="container-xxl">
        <div className="trend-header-area d-flex justify-content-between align-items-center">
          <span className="trend-header">Top Featured Products</span>
          <a href="/" className="show-more">
            Show More <BsArrowRight color="#263c97" />
          </a>
        </div>
        <div className="row py-3 g-4 justify-content-center align-items-center">
          {FeaturedItems.map((products) => {
            return (
              <div className="col-md-4 col-lg-4">
                <div className="featured-area">
                  <div className="featured-img position-relative">
                    <a className="featured-product" href="/">
                      <img
                        className="img-fluid"
                        src={products.imgProduct}
                        alt="Loading"
                      />

                      <div className="show-product">
                        <FaRegEye
                          color="#E91E63"
                          size={30}
                          className="eye-icon"
                        />
                      </div>

                      {products.sale !== null ? (
                        <span className="sale-icon featured-sale">
                          {products.saleIcon}
                        </span>
                      ) : (
                        ""
                      )}
                    </a>
                  </div>
                  <div className="featured-info p-2">
                    <div className="featured-top">
                      <a href="/" className="featured-header">
                        {products.header}
                      </a>
                      <p className="featured-title">{products.title}</p>
                    </div>
                    <div className="featured-bottom text-end">
                      <span className="featured-price">{products.price}</span>
                      <span className="discount-price">{products.sale}</span>
                      <button className="add-cart-btn">+ ADD TO CARD</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
