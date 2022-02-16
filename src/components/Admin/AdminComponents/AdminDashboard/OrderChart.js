import React from "react";
import adminStyle from "./style/admindashboard.module.css";
import { BsBasket } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { SaleandOrderContext } from "context/AdminContext/SaleandOrderContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";

const OrderChart = () => {
  const { orders,ordersData, orderDataOptions } =
    React.useContext(SaleandOrderContext);
    ChartJS.register(ArcElement, Tooltip, Legend);
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
      ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement);
  return (
    <div className="col-md-6 col-lg-4">
      <div className={adminStyle.ordersValueWrapper}>
        <div className={adminStyle.ordersHeader}>
          <BsBasket className={adminStyle.ordersIcon} />
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
        <h5 className={adminStyle.ordersTitle}>Orders</h5>
        <div className={adminStyle.ordersValueFlex}>
          <h6 className={adminStyle.orderInnerValue}>{orders.length}</h6>
          <div className={adminStyle.orderInnerChart}>
            <Line options={orderDataOptions} data={ordersData} />
          </div>
        </div>
        <span className={adminStyle.statusLastMonth}>
          Over last month 1.4%{" "}
        </span>
      </div>
    </div>
  );
};

export default OrderChart;
