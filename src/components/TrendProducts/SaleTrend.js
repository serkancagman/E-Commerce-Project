import React from "react";
import { Link } from "react-router-dom";

export const SaleTrend = ({ imageMain, header, title,trendLink }) => {
  return (
    <div className="col-md-4 text-center col-lg-4">
      <div className="trend-img-area w-100">
        <img className="img-fluid" src={imageMain} alt="Loading" />

        <div className="trend-info">
          <Link
            to={trendLink}
            className="trend-link d-flex flex-column justify-content-between"
          >
            <span className="trendLinkHeader">{header}</span>
            <span className="trend-title">{title}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
