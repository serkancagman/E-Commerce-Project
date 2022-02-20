import React from "react";
import { Link } from "react-router-dom";
import "./style/featuredcategories.css";
import { FeaturedCatItems } from "../Helpers/FeaturedCatItems";
import { MdStars } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import apple from "../../images/apple.svg";
import nike from "../../images/nike.svg";
import chanel from "../../images/chanel.svg";
import huawei from "../../images/huawei.svg";
import samsung from "../../images/samsung.svg";
import zara from "../../images/zara.svg";
import "swiper/css";
import "swiper/css/autoplay";
import SwiperCore, { FreeMode, Pagination } from "swiper";

SwiperCore.use([FreeMode, Pagination, Autoplay]);

 const FeaturedCategories = () => {
  return (
    <section id="featuredCategories">
      <div className="container-fluid">
        <h4 className="featured-cat-header my-2 fw-bold">
          <MdStars size={30} /> Featured Categories
        </h4>
        <div className="row g-4 justify-content-center align-items-center">
          {FeaturedCatItems.map((catItems) => {
            return (
              <div key={catItems.id} className="col-md-6 col-lg-3">
                <div className="feat-box d-flex flex-column">
                  <Link to={catItems.mainLink} className="featured-link">
                    <img
                      className="img-fluid featured-banner"
                      src={catItems.bannerImg}
                      alt="Loading..."
                    />
                  </Link>
                  <Link to={catItems.mainLink} className="featured-header-cat w-100 text-center py-3">{catItems.header}</Link>
                  <div className="featured-nav">
                    <ul>
                      <li className="featured-item">
                        <Link to={catItems.firstLink} className="featured-link">
                          {catItems.firstLinkName}
                        </Link>
                      </li>
                      <li className="featured-item">
                        <Link to={catItems.secondLink} className="featured-link">
                          {catItems.secondLinkName}
                        </Link>
                      </li>
                      <li className="featured-item">
                        <Link to={catItems.thirthLink} className="featured-link">
                          {catItems.thirthLinkName}
                        </Link>
                      </li>
                      <li className="featured-item">
                        <Link to={catItems.fourthLink} className="featured-link">
                          {catItems.fourthLinkName}
                        </Link>
                      </li>
                      <li className="featured-item">
                        <Link to={catItems.fifthLink} className="featured-link">
                          {catItems.fifthLinkName}
                        </Link>
                      </li>
                      <li className="featured-item">
                        <Link to={catItems.sixthLink} className="featured-link">
                          {catItems.sixthLinkName}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Swiper
          slidesPerView={6}
          
          autoplay={{ delay: 3000 }}
          loop={true}
          loopFillGroupWithBlank={true}
          className="mySwiper my-3"
          style={{backgroundColor:"#fff"}}
          breakpoints={{
            "275": {
              "slidesPerView": 2,
              "spaceBetween": 20
              
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
        >
          <SwiperSlide>
            <img className="img-fluid brand-img" src={apple} alt="Loading" />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-fluid brand-img" src={zara} alt="Loading" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-fluid brand-img" src={samsung} alt="Loading" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-fluid brand-img" src={chanel} alt="Loading" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-fluid brand-img" src={huawei} alt="Loading" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-fluid brand-img" src={nike} alt="Loading" />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-fluid brand-img" src={samsung} alt="Loading" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-fluid brand-img" src={zara} alt="Loading" />{" "}
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedCategories;