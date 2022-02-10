import React from "react";
import adminStyle from "./style/admindashboard.module.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsArrowUp } from "react-icons/bs";
import { MdPriceCheck } from "react-icons/md";
import { Line } from "react-chartjs-2";
import { SaleandOrderContext } from "context/AdminContext/SaleandOrderContext";


const SalesChart = () => {

    const {salesData,salesOptions,totalSalePrice} = React.useContext(SaleandOrderContext);

  return (
    <div className="col-md-6 col-lg-6 h-100">
      <div className={adminStyle.salesChartHeader}>
        <h5 className={adminStyle.chartTitle}>
          Sales Chart{" "}
          <span className={adminStyle.questionWrapper}>
            <span className={adminStyle.questionInfo}>
              Daily orders and sales.
            </span>
            <AiOutlineQuestionCircle className={adminStyle.questionIcon} />
          </span>{" "}
        </h5>

        <div className={`dropdown ${adminStyle.salesChartBtn}`}>
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
              <a className="dropdown-item" href="#">
                View Detail
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Download
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={adminStyle.salesChartWrapper}>
        <div className={adminStyle.saleChartInner}>
          <div className={`d-flex align-items-center${adminStyle.saleTotal}`}>
            <MdPriceCheck className={adminStyle.saleTotalIcon} />
            <h6 className={adminStyle.saleTotalTitle}>$ {totalSalePrice}</h6>
            <span className={adminStyle.showMath}>
              {" "}
              <BsArrowUp /> % 8.30
            </span>
          </div>
          <select
            className={`form-select ${adminStyle.selectTime}`}
            aria-label="Default select example"
          >
            <option value="0">January</option>
            <option value="1">February</option>
            <option value="2">March</option>
            <option value="3">April</option>
          </select>
        </div>

        <Line options={salesOptions} data={salesData} />
      </div>
    </div>
  );
};

export default SalesChart;
