import React from 'react';
import { SaleandOrderContext } from 'context/AdminContext/SaleandOrderContext';
import adminStyle from "./style/admindashboard.module.css";
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import {BsCreditCard2Front} from 'react-icons/bs';
const SalesTotalSub = () => {
    const {saleMiniOptions,subSalesData,subSalesOptions} = React.useContext(SaleandOrderContext);


  return (

    <div className="col-md-4 col-lg-4">
    <div className={adminStyle.ordersValueWrapper}>
      <div className={adminStyle.ordersHeader}>
        <BsCreditCard2Front className={adminStyle.ordersIcon} />
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
      <h5 className={adminStyle.ordersTitle}>Sales</h5>
      <div className={adminStyle.ordersValueFlex}>
        <h6 className={adminStyle.orderInnerValue}>$3.759,00</h6>
        <div className={adminStyle.orderInnerChart}>
          <Line options={subSalesOptions} data={subSalesData} />
        </div>
      </div>
      <span className={adminStyle.statusLastMonth}>
        Over last month 1.9%{" "}
      </span>
    </div>
  </div>
  )
};

export default SalesTotalSub;
