import React from 'react';
import adminStyle from "./style/admindashboard.module.css";
import { Link } from 'react-router-dom';
import { BsArrowUp  } from "react-icons/bs";
import { Line } from "react-chartjs-2";
import { AiOutlineDownload,AiFillStar } from "react-icons/ai";
import { SaleandOrderContext } from 'context/AdminContext/SaleandOrderContext';
const CustomerRating = () => {
    const {orderDataOptions,ordersData} = React.useContext(SaleandOrderContext)
  return         <div className="col-md-6 col-lg-4">
  <div className={adminStyle.customerRatingWrapper}>
    <div className={adminStyle.ordersHeader}>
      <h5 className={adminStyle.ordersTitle}>Customer Rating</h5>
      <button
        className={`btn ${adminStyle.showMoreBtn}`}
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        ...
      </button>
      <ul
        className={`dropdown-menu ${adminStyle.chartDropDownItem}`}
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <Link className="dropdown-item" to="/#">
            View Detail
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/#">
            Download
          </Link>
        </li>
      </ul>
    </div>

    <div className={adminStyle.ratingInner}>
      <span className={adminStyle.ratingTotal}>4.0</span>
      <div className={adminStyle.starsWrapper}>
        <span className={adminStyle.ratingStarts}>
          <AiFillStar className={adminStyle.starItem} />
        </span>
        <span className={adminStyle.ratingStarts}>
          <AiFillStar className={adminStyle.starItem} />
        </span>
        <span className={adminStyle.ratingStarts}>
          <AiFillStar className={adminStyle.starItem} />
        </span>
        <span className={adminStyle.ratingStarts}>
          <AiFillStar className={adminStyle.starItem} />
        </span>
        <span className={adminStyle.ratingStarts}>
          <AiFillStar
            className={`${adminStyle.starItem} ${adminStyle.starLast}`}
          />
        </span>
        <span className={adminStyle.ratingStarts}>(310)</span>
      </div>
      <span className={adminStyle.ratingPercent}>
        <BsArrowUp /> +35{" "}
        <span className={adminStyle.ratingPercentTitle}>
          Point from last month
        </span>
      </span>
      <div className={adminStyle.orderInnerChart}>
        <Line options={orderDataOptions} data={ordersData} />
      </div>
      <Link
        to="/admin/channels"
        className={adminStyle.downloadChartData}
      >
        <button className={`btn ${adminStyle.getDataBtn}`}>
          <AiOutlineDownload className={adminStyle.downloadIcon} />{" "}
          Download Report
        </button>
      </Link>
    </div>
  </div>
</div>
};

export default CustomerRating;
