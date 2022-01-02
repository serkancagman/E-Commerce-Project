import React from "react";
import "./premium.css";
import PremiumPic from "../../images/productMain.jpg";
import PremiumPic1 from "../../images/productMain2.jpg";
import PremiumPic2 from "../../images/productMain3.jpg";
import PremiumPic3 from "../../images/productMain4.jpg";
import PremiumPic4 from "../../images/productMain5.jpg";
import PremiumPic5 from "../../images/productMain6.jpg";
export const Premium = () => {
  return (
    <section className="py-3">
      <div className="container-xxl">
        <div className="row g-4 justify-content-center align-items-center">
          <div className="col-md-3 col-lg-3">
            <div className="premium-area d-flex flex-column justify-content-center align-items-center">
              <div className="premiumTop">
                <img
                  className="img-fluid  premium-img"
                  src={PremiumPic}
                  alt=""
                />
                <a className="premium-link" href="/">CAMERAS</a>

              </div>
              <div className="premiumBottom">
                <img
                  className="img-fluid premium-img"
                  src={PremiumPic1}
                  alt=""
                />
                <a className="premium-link" href="/">ACCESSORIES</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 text-center">
            <div className="premium-area big-one">
              <img className="img-fluid premium-img" src={PremiumPic2} alt="" />
              <a className="premium-link" href="/">KEYBOARD & ACCESSORIES</a>
            </div>
          </div>
          <div className="col-md-3 col-lg-3">
            <div className="premium-area d-flex flex-column justify-content-center align-items-center">
              <div className="premiumTop">
                <img
                  className="img-fluid  premium-img"
                  src={PremiumPic3}
                  alt=""
                />
                <a className="premium-link" href="/">SMARTPHONE</a>
              </div>
              <div className="premiumBottom">
                <img
                  className="img-fluid premium-img"
                  src={PremiumPic4}
                  alt=""
                />
                <a className="premium-link" href="/">SPEAKER & AUDIO</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 text-center">
            <div className="premium-area big-one">
              <img className="img-fluid premium-img" src={PremiumPic5} alt="" />
              <a className="premium-link" href="/">GAMEPAD AND CONTROLLER</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
