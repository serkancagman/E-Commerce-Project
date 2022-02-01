import React from "react";
import { BsStar } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
const WriteReview = ({ productData,showReview, setShowReview }) => {
  return (
    <div className={`Review ${showReview ? "showReview" : ""}`}>
      <div className="reviewWrapper">
        <div className="reviewHeader">
          <h5>Write your review</h5>
        </div>
        <form className="text-center">
          <div className="reviewProduct d-flex justify-content-center align-items-center">
            <img width={100} src={productData.photos[0]} alt="..." />
            <span className="reviewProductTitle fw-bold mx-2">
              {productData.title}
            </span>
          </div>
          <div className="qualityStars">
            <span className="qualityHeader">Quality</span>
            <div className="qualityStarsWrapper">
              <div className="qualityStarsInner d-flex align-items-center justify-content-center">
                <div className="qualityStar">
                  <BsStar className="starIcon" />
                </div>
                <div className="qualityStar">
                  <BsStar className="starIcon" />
                </div>
                <div className="qualityStar">
                  <BsStar className="starIcon" />
                </div>
                <div className="qualityStar">
                  <BsStar className="starIcon" />
                </div>
                <div className="qualityStar">
                  <BsStar className="starIcon" />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group d-flex m-3 align-items-center">
            <label className="reviewLabel" htmlFor="reviewName">
              Your Name *
            </label>

            <input
              type="text"
              className="form-control"
              id="reviewName"
              
            />
          </div>
            <div className="form-group d-flex m-3 align-items-center">
            <label className="reviewLabel" htmlFor="reviewTitle">
                Review Title *</label>
            <input type="text" className="form-control" id="reviewTitle"  />
            </div>
            <div className="form-group d-flex m-3 align-items-center">
            <label className="reviewLabel" htmlFor="reviewMessage">
                Review Message *</label>
            <textarea className="form-control" id="reviewMessage" rows="3" />
            </div>
            <button type="submit" className="btn sendReview my-3">SEND</button>

        </form>
        <span onClick={() => setShowReview(false)} className="closeReview">
            <AiOutlineClose />
        </span>
      </div>
    </div>
  );
};

export default WriteReview;
