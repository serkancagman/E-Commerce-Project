import React from "react";
import "./style/trendproducts.css";
import "./style/trendproductresponsive.css"
import { TrendItems } from "../Helpers/TrendItems";
import { BsArrowRight } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { SaleTrend } from "../TrendProducts/SaleTrend";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, FreeMode, Navigation, Pagination} from "swiper";
import { Link } from "react-router-dom";
import trendImage from "../../images/trendProduct.jpg";
import trendImage1 from "../../images/trendProduct1.jpg";
import trendImage2 from "../../images/trendProduct2.jpg";

import "swiper/css";
import "swiper/css/navigation";

export const TrendProducts = () => {
  
  SwiperCore.use([FreeMode, Pagination, Navigation, Autoplay]);


  return (
    <section id="trendProduct">
      <div className="container-xxl">
        <div className="trend-area">
          <div className="trend-header-area d-flex justify-content-between align-items-center">
            <span className="trend-header">Hot Trend Products</span>
            <Link to="/" className="show-more">
              Show More <BsArrowRight color="#263c97" />
            </Link>
          </div>
          <div className="trends-main py-2">
            <div className="trend-inner  d-flex align-items-center">
              <Swiper
                slidesPerView={5}
                spaceBetween={50}
                loop={true}
                pagination
                navigation
                loopFillGroupWithBlank={true}
                breakpoints={{
                  "275": {
                    "slidesPerView": 1,
                    "spaceBetween": 30
                    
                  },
                  "640": {
                    "slidesPerView": 2,
                    "spaceBetween": 30
                    
                  },
                  "768": {
                    "slidesPerView": 3
                    
                  },
                  "700": {
                    "slidesPerView": 3
                    
                    
                  },
                  "1024": {
                    "slidesPerView": 4
                    
                  },"1200": {
                    "slidesPerView": 5
                  
                  }
                  
                }}
                className="mySwiper trendSwiper my-3"
              >
                {TrendItems.map((products) => {
                  return (
                    <SwiperSlide key={products.id} >
                      <article  className="product-box">
                        <div className="product-img">
                          <Link to={products.link}>
                            <img
                              className="img-fluid"
                              src={products.imgProduct}
                              alt="Loading..."
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
                          </Link>
                        </div>
                        <div className="product-titles text-center">
                          <span className="product-title">
                            {products.header}
                          </span>
                        </div>
                        <div className="product-price my-3 w-100 d-flex justify-content-between align-items-center">
                          <span className="price mx-2">
                            {products.price}{" "}
                            
                          </span>
                          <span className="sale-price">{products.sale}</span>
                          <button className="buy-btn mx-2">BUY</button>
                        </div>
                      </article>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="sale-trend">
          <div className="sale-trend-inner">
            <div className="row g-4 justify-content-center align-items-center">
              <SaleTrend
                imageMain={trendImage}
                header={"Microsoft Surface Laptop 14"}
                title="Up To -30%"
                trendLink="/"
              />
              <SaleTrend
                imageMain={trendImage1}
                header="Cameras Best Sport Edition"
                title="Up To -20%"
                trendLink="/"
              />
              <SaleTrend
                imageMain={trendImage2}
                header="Sneaker Nike Air Max 90"
                title="Up To -60%"
                trendLink="/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
