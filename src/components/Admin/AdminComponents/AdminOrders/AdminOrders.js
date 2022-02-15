import AdminFooter from "components/Admin/Footer/AdminFooter";
import React from "react";
import { BsBarChart } from "react-icons/bs";
import { Link } from "react-router-dom";
import moment from 'moment';
import {Table} from "antd";
import { SaleandOrderContext } from "context/AdminContext/SaleandOrderContext";
import orderStyle from "./style/adminorders.module.css";
const AdminOrders = () => {
  const {orders} = React.useContext(SaleandOrderContext);
 
 const tableData = orders.map(order => {
  let totalPrice = order.items.map(item => item.price).reduce((a,b) => a + b, 0);
  return {
    key: order._id,
    orderId: order._id.slice(-2),
    user: order.user.email,
    total: totalPrice.toFixed(2),
    address: order.adress,
    status: "New",
    date: moment(order.createdAt).format("DD/MM/YYYY"),
  }})
    
  const columns = React.useMemo(()=>{
    return [
      {
        title: 'Order ID',
        dataIndex: 'orderId',
        key: 'orderId',
        render: (text, record) => (<Link to={`/admin/orders/${record.key}`} className={orderStyle.itemId} >#{text}</Link>),
      },
      {
        title: 'User',
        dataIndex: 'user',
        key: 'user',
      },
      {
        title: 'Total Price',
        dataIndex: "total",
        key: "total",
        render: (total) => <span>${total}</span>,
        
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status) => <span className="text-success">{status}</span>,
      },
      {
        title: 'Order Date',
        dataIndex: 'date',
        key: 'date',
      },
    ];
  },[]) 

  return (
    <div className="col-lg-10 col-md-12">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <BsBarChart className={orderStyle.crumbIcon} />
            <Link className={orderStyle.breadLink} to="/admin/dashboard">
              Admin
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
      <Table columns={columns} dataSource={tableData} rowKey={orders._id} />
      <AdminFooter/>
    </div>
  );
};

export default AdminOrders;
