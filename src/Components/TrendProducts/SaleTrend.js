import React from "react";

export const SaleTrend = ({ imageMain, header, title,trendLink }) => {
  return (
    <div className="col-md-4 col-lg-4">
      <div className="trend-img-area">
        <img className="img-fluid" src={imageMain} alt="Loading" />

        <div className="trend-info">
          <a
            href={trendLink}
            className="trend-link d-flex flex-column justify-content-between"
          >
            <span>{header}</span>
            <span className="trend-title">{title}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
