import React from "react";
import "./banner.css";
import { carouselItems } from "../Helpers/CarouselItem";
import { BannerItems } from "../Helpers/BannerItems";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-creative";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";

SwiperCore.use([Pagination]);
export const Banner = () => {
  return (
    <section className="py-4">
      <div className="container-xxl">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-7 col-md-12">
            <Swiper
              pagination={true}
              slidesPerView={1}
              spaceBetween={35}
              autoplay={{ delay: 5000 }}
              loop={true}
              loopFillGroupWithBlank={true}
              className="mySwiper my-3"
            >
              {carouselItems.map((carousels) => {
                return (
                  <SwiperSlide>
                    <div key={carousels.id} className="main-carousel">
                      <div className="carouselInner position-relative">
                        <img
                          className="img-fluid carousel-image"
                          src={carousels.imgBASE}
                          alt="Loading"
                        />
                        <div className="carousel-info">
                          <h5 className="carousel-header m-0">
                            {carousels.header}
                          </h5>
                          <span className="carousel-titles">
                            {carousels.title}
                          </span>
                          <button className="carousel-btn">DISCOVER NOW</button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="col-lg-5 col-md-12 bnr-itm">
            <div className="row g-4 justify-content-center align-items-center">
              {BannerItems.map((boxes) => {
                return (
                  <div key={boxes.id} className="col-lg-6 col-md-6 col-sm-6 ">
                    <div className="banner-item-area position-relative">
                      <img
                        className=" banner-item-img"
                        src={boxes.imgURL}
                        alt="Loading"
                      />
                      <div className="banner-info">
                        <h5 className="banner-header">{boxes.header}</h5>
                        <span className="banner-title">{boxes.title}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
