import React from "react";
import "./banner.css";
import { carouselItems } from "../Helpers/CarouselItem";
import { BannerItems } from "../Helpers/BannerItems";
export const Banner = () => {
  const carouselList = {
    firstItem: carouselItems[0],
    secondItem: carouselItems[1],
    thirthItem: carouselItems[2],
  };

  const [carousel, setCarousel] = React.useState(carouselList.firstItem);
  return (
    <section className="py-2">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-7 col-md-12">
            <div className="main-carousel">
              <div className="carouselInner position-relative">
                <img
                  className="img-fluid carousel-image"
                  src={carousel.imgBASE}
                  alt="Loading"
                />
                <div className="carousel-info">
                  <h5 className="carousel-header m-0">{carousel.header}</h5>
                  <span className="carousel-titles">{carousel.title}</span>
                  <button className="carousel-btn">DISCOVER NOW</button>

                  <div className="indicators d-flex justify-content-center align-items-center">
                    <span
                      onClick={() => setCarousel(carouselList.firstItem)}
                      className={`indicator${
                        carousel === carouselList.firstItem
                          ? " current-carousel"
                          : ""
                      }`}
                    ></span>
                    <span
                      onClick={() => setCarousel(carouselList.secondItem)}
                      className={`indicator${
                        carousel === carouselList.secondItem
                          ? " current-carousel"
                          : ""
                      }`}
                    ></span>
                    <span
                      onClick={() => setCarousel(carouselList.thirthItem)}
                      className={`indicator${
                        carousel === carouselList.thirthItem
                          ? " current-carousel"
                          : ""
                      }`}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
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
