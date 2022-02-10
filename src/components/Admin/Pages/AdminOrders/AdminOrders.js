import AdminFooter from "components/Admin/Footer/AdminFooter";
import React from "react";
import { BsBarChart } from "react-icons/bs";
import { Link } from "react-router-dom";
import OrderPagination from "./OrderPagination";
import OrdersTable from "./OrdersTable";
import orderStyle from "./style/adminorders.module.css";
const AdminOrders = () => {
  return (
    <section className={orderStyle.ordersMain}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <BsBarChart className={orderStyle.crumbIcon} />
            <Link className={orderStyle.breadLink} to="/admin/dashboard">
              Dashboard
            </Link>
          </li>
          <li
            className={`breadcrumb-item ${orderStyle.lastCrumb}`}
            aria-current="page"
          >
            Orders
          </li>
        </ol>
      </nav>

      <div className={orderStyle.ordersHeaderNav}>
        <div className="d-flex align-items-center justify-content-between">
          <div className={orderStyle.ordersHeaderLeft}>
            <h5 className={orderStyle.ordersHeaderTitle}>All Orders</h5>
            <select
              className={`form-select ${orderStyle.ordersHeaderSelect}`}
              aria-label="Default select example"
            >
              <option value="sort">Sort by</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className={orderStyle.ordersHeaderRight}>
            <div className={orderStyle.ordersHeaderDropdown}>
              <div className="dropdown">
                <button
                  className={`btn dropdown-toggle ${orderStyle.actionDropdown}`}
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Actions
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link className="dropdown-item" to="/#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OrdersTable/>
      <OrderPagination/>
      <AdminFooter/>
    </section>
  );
};

export default AdminOrders;
