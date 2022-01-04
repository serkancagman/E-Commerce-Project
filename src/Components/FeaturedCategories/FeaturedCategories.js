import React from "react";
import "./featuredcategories.css";
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
              <div id={catItems.id} className="col-md-3 col-lg-3">
                <div className="feat-box d-flex flex-column">
                  <a href={catItems.mainLink} className="featured-link">
                    <img
                      className="img-fluid featured-banner"
                      src={catItems.bannerImg}
                      alt="Loading..."
                    />
                  </a>
                  <a href={catItems.mainLink} className="featured-header w-100 text-center py-3">{catItems.header}</a>
                  <div className="featured-nav">
                    <ul>
                      <li className="featured-item">
                        <a href={catItems.firstLink} className="featured-link">
                          {catItems.firstLinkName}
                        </a>
                      </li>
                      <li className="featured-item">
                        <a href={catItems.secondLink} className="featured-link">
                          {catItems.secondLinkName}
                        </a>
                      </li>
                      <li className="featured-item">
                        <a href={catItems.thirthLink} className="featured-link">
                          {catItems.thirthLinkName}
                        </a>
                      </li>
                      <li className="featured-item">
                        <a href={catItems.fourthLink} className="featured-link">
                          {catItems.fourthLinkName}
                        </a>
                      </li>
                      <li className="featured-item">
                        <a href={catItems.fifthLink} className="featured-link">
                          {catItems.fifthLinkName}
                        </a>
                      </li>
                      <li className="featured-item">
                        <a href={catItems.sixthLink} className="featured-link">
                          {catItems.sixthLinkName}
                        </a>
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
