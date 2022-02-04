import React from "react";
import "./style/featured.css";
import { FaRegEye } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { trendProductAPI } from "../../API/trendProductAPI";
import { useQuery } from "react-query";
import { ShopCartContext } from "context/ShopCartContext";
export const FeaturedProducts = () => {

  const {addToCart, cartItems} = React.useContext(ShopCartContext);
  const {
    data,
    error,
    isLoading
  } = useQuery("repoData", trendProductAPI)

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <section>
      <div className="container-fluid">
        <div className="trend-header-area d-flex justify-content-between align-items-center">
          <span className="trend-header">Top Featured Products</span>
          <Link to="/" className="show-more">
            Show More <BsArrowRight color="#263c97" />
          </Link>
        </div>
        <div className="row py-3 g-4 justify-content-center align-items-center">
          
              {data.map((featuredData, i) => {

                const filteredItems = cartItems.find(item => item._id === featuredData._id);

                return (
                  <div key={i} className="col-md-4 col-lg-4">
                    <div className="featured-area">
                      <div className="featured-img position-relative">
                        <Link
                          className="featured-product"
                          to={`/product/${featuredData._id}`}
                        >
                          <picture>
                            <source
                              srcSet={featuredData.photos[1]}
                              type="image/webp"
                            />
                            <img
                              alt="..."
                              className="img-fluid"
                              src={featuredData.photos[0]}
                              type="image/vnd.ms-photo"
                            />
                          </picture>

                          <div className="show-product">
                            <FaRegEye
                              color="#E91E63"
                              size={30}
                              className="eye-icon"
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="featured-info p-2">
                        <div className="featured-top">
                          <Link to="/#" className="featured-header">
                            {featuredData.title}
                          </Link>
                          <p className="featured-title">
                            lorem ipsum lorem ipsum
                          </p>
                        </div>
                        <div className="featured-bottom text-end">
                          <span className="featured-price py-2">
                            ${featuredData.price}
                          </span>
                          <button onClick={()=> addToCart(featuredData,filteredItems)} className={`add-cart-btn ${filteredItems ? "addedBasket" : ""}`}>
                          {filteredItems ? "Remove from cart" : "Add to cart"}
                          </button>
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
