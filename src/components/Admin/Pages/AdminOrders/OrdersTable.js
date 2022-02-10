import { getOrderData } from "API/trendProductAPI";
import { SaleandOrderContext } from "context/AdminContext/SaleandOrderContext";
import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import orderStyle from "./style/adminorders.module.css";
const OrdersTable = () => {

    const {orders} = React.useContext(SaleandOrderContext);
    
        
    
    console.log(orders);
  return (
    <table className={orderStyle.orderTable}>
      <thead className={orderStyle.orderTableHeader}>
        <tr>
          <th className={orderStyle.ordersTableTH}>ID</th>
          <th className={orderStyle.ordersTableTH}>NAME</th>
          <th className={orderStyle.ordersTableTH}>DATE</th>
          <th className={orderStyle.ordersTableTH}>TOTAL</th>
          <th className={orderStyle.ordersTableTH}>STATUS</th>
          <th className={orderStyle.ordersTableTH}>ACTIONS</th>
        </tr>
      </thead>
      <tbody className={orderStyle.orderTableBody}>
        {orders.map(order => {
            let totalPrice = order.items.map(item => item.price).reduce((a,b) => a + b, 0);
            let orderId = order._id.slice(-2)
            return (
          <tr key={order._id} className={orderStyle.bodyTR}>
          <td className={orderStyle.OrdersTableTD}><Link to={`/admin/orders/${order._id}`} className={orderStyle.itemId} >#{orderId}</Link></td>
          <td className={orderStyle.OrdersTableTD}>{order.user.email}</td>
          <td className={orderStyle.OrdersTableTD}>{moment(order.createdAt).format("DD/MM/YYYY")}</td>
          <td className={orderStyle.OrdersTableTD}>${totalPrice.toFixed(2)}</td>
          <td className={orderStyle.OrdersTableTD}>
            <span className="text-success">New</span>
          </td>
          <td className={orderStyle.OrdersTableTD}>
            <div className="btn-group dropstart">
              <button
                type="button"
                className={`btn ${orderStyle.actionBtn}`}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ...
              </button>
              <ul className={`dropdown-menu ${orderStyle.actionShow}`}>
                <li>
                  <span className="dropdown-item">Action</span>
                </li>
                <li>
                  <span className="dropdown-item">Another action</span>
                </li>
                <li>
                  <span className="dropdown-item">Something else here</span>
                </li>
              </ul>
            </div>
          </td>
        </tr>
            )
        })}
      </tbody>
    </table>
  );
};

export default OrdersTable;
