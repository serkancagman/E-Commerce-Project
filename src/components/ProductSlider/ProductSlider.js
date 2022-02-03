import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import "./style/productslider.css";
const ProductSlider = ({ data, loading, header,error }) => {
  SwiperCore.use([FreeMode, Pagination, Navigation, Autoplay]);

  if (loading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="py-4" id="trendProduct">
      <div className="container-fluid">
        <div className="trend-area">
          <div className="trend-header-area d-flex justify-content-between align-items-center">
            <span className="trend-header">{header}</span>
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
                  275: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  700: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 5,
                  },
                }}
                className="mySwiper trendSwiper my-3"
              >
                
                      {data.map((trendData, i) => {
                        return (
                          <SwiperSlide key={i}>
                            <article className="product-box">
                              <div className="product-img">
                                <Link to={`/product/${trendData._id}`}>
                                  <picture>
                                    <source
                                      srcSet={trendData.photos[1]}
                                      type="image/webp"
                                    />
                                    <img
                                      className="img-fluid"
                                      src={trendData.photos[0]}
                                      type="image/vnd.ms-photo"
                                      alt="..."
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
                              <div className="product-titles text-center">
                                <Link
                                  to={`/product/${trendData._id}`}
                                  className="product-title"
                                >
                                  {trendData.title}
                                </Link>
                              </div>
                              <div className="product-price my-3 w-100 d-flex justify-content-between align-items-center">
                                <span className="price mx-2">
                                  ${trendData.price}{" "}
                                </span>

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
      </div>
    </section>
  );
};

export default ProductSlider;
