import React from "react";
import { BsStar } from "react-icons/bs";
import Modal from "antd/lib/modal/Modal";
const WriteReview = ({ productData, isShowReview, reviewOff, handleCancelReview }) => {
  return (
    <Modal footer={null} title="Write your review" visible={isShowReview} onOk={reviewOff} onCancel={handleCancelReview} >
      <div className="reviewWrapper">
        
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
        
      </div>
      </Modal>
  );
};

export default WriteReview;
