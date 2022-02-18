import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, FreeMode, Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { ShopCartContext } from "context/ShopCartContext";
import ContentLoader from "react-content-loader";
import "./style/productslider.css";
import { MobileProductSLiderSkeleton, ProductSkeleton } from "components/Loader/SkeletonLoader";
const ProductSlider = ({ data, loading, header, error }) => {
  SwiperCore.use([FreeMode, Pagination, Navigation, Autoplay, Mousewheel]);
  const { addToCart, cartItems } = React.useContext(ShopCartContext);
  if (loading){
    if(window.innerWidth <= 414){
      return (
        <div className="container-fluid my-2">
          <div className="h-100 d-flex justify-content-center pe-2 w-100">
          <MobileProductSLiderSkeleton/>
        </div>
          </div>
      )
    }else{
      return(
        <div className="d-flex justify-content-center w-100">
          <ProductSkeleton/>
        </div>
      )
    }
  }

  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="pt-4" id="trendProduct">
      <div className="container-fluid">
        <div className="trend-area">
          <div className="trend-header-area d-flex justify-content-between align-items-center">
            <span className="trend-header">{header}</span>
            <Link to="/" className="show-more">
              Show More <BsArrowRight color="#263c97" />
            </Link>
          </div>
          <div className="trends-main px-1 py-2">
            <div className="trend-inner  d-flex align-items-center">
              <Swiper
                slidesPerView={6}
                
                loop={true}
                cssMode={true}
                
                
                navigation
                loopFillGroupWithBlank={true}
                breakpoints={{
                  275: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 2,
                    
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  700: {
                    slidesPerView: 4,
                    
                  },
                  1024: {
                    spaceBetween: 20,
                    slidesPerView: 5,
                  },
                  1200: {
                    slidesPerView: 5,
                  },
                  1500: {
                    slidesPerView: 6,
                  },
                }}
                className="mySwiper trendSwiper my-3"
              >
                {data.map((trendData, i) => {
                  
                  const findCurrentItem = cartItems.find((item) => item._id === trendData._id);
                  
                  return (
                    <SwiperSlide key={i}>
                      <article className="product-box">
                        <div className="product-img">
                          <Link to={`/product/${trendData._id}`}>
                            
                              <img
                                className="img-fluid productMainImg"
                                src={trendData.photos[0]}
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

                          <button onClick={()=> addToCart(trendData,findCurrentItem)} className={`buy-btn mx-2 ${findCurrentItem ? "addedBasket" : ""}`}>{findCurrentItem ? "Remove from cart" : "Add to cart"}</button>
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
