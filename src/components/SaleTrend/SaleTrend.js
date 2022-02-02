import React from "react";
import { Link } from "react-router-dom";
import {SaleTrendItems} from "components/Helpers/SaleTrendItems";
export const SaleTrend = () => {
  return (
    <section id="saleTrend">
      <div className="container-fluid">
        <div className="sale-trend">
          <div className="sale-trend-inner">
            <div className="row g-4 justify-content-center align-items-center">
            {SaleTrendItems.map((saleTrend, index) => {
                <div key={index} className="col-md-4 text-center col-lg-4">
                <div className="trend-img-area w-100">
                  <img className="img-fluid" src={saleTrend.imageMain} alt="Loading" />

                  <div className="trend-info">
                    <Link
                      to={saleTrend.trendLink}
                      className="trend-link d-flex flex-column justify-content-between"
                    >
                      <span className="trendLinkHeader">{saleTrend.header}</span>
                      <span className="trend-title">{saleTrend.title}</span>
                    </Link>
                  </div>
                </div>
              </div>
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
