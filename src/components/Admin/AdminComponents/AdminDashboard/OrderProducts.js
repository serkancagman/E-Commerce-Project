import React from "react";
import adminStyle from "./style/admindashboard.module.css";
import { Bar } from "react-chartjs-2";
import { FiPackage } from "react-icons/fi";
import { SaleandOrderContext } from "context/AdminContext/SaleandOrderContext";
const OrderProducts = () => {
  const { ProductDataOptions, orderProductData, totalOrderItem } =
    React.useContext(SaleandOrderContext);
  return (
    <div className="col-md-4 col-lg-4">
      <div className={adminStyle.productSaleChart}>
        <div className={adminStyle.productSaleInner}>
          <div className={adminStyle.productSaleIcon}>
            <FiPackage />
          </div>
          <h6 className={adminStyle.productSaleHeader}>Products Sold</h6>
          <span className={adminStyle.productSoldValue}>{totalOrderItem} Sold</span>
          <div className={adminStyle.productSaleChart}>
            <Bar options={ProductDataOptions} data={orderProductData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProducts;
