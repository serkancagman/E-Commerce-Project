import React from "react";
import { Link } from "react-router-dom";
import "./style/featuredcategories.css";
import { FeaturedCatItems } from "../Helpers/FeaturedCatItems";
import { MdStars } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Brand from "../../images/brand.jpg";
import Brand1 from "../../images/brand1.jpg";
import Brand2 from "../../images/brand2.jpg";
import Brand3 from "../../images/brand3.jpg";
import Brand4 from "../../images/brand4.jpg";
import "swiper/css";
import "swiper/css/autoplay";
import SwiperCore, { FreeMode, Pagination } from "swiper";

SwiperCore.use([FreeMode, Pagination, Autoplay]);

export const FeaturedCategories = () => {
  return (
    <section>
      <div className="container-xxl">
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
          spaceBetween={35}
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
            <img className="img-fluid brand-img" src={Brand} alt="Loading" />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-fluid brand-img" src={Brand1} alt="Loading" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-fluid brand-img" src={Brand2} alt="Loading" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-fluid brand-img" src={Brand3} alt="Loading" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-fluid brand-img" src={Brand4} alt="Loading" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-fluid brand-img" src={Brand} alt="Loading" />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-fluid brand-img" src={Brand1} alt="Loading" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-fluid brand-img" src={Brand} alt="Loading" />{" "}
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
