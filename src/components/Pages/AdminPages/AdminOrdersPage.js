import React from 'react'
import AdminNav from "components/Admin/Nav/AdminNav";
import "components/Admin/style/admin.css"
import AdminOrders from 'components/Admin/Pages/AdminOrders/AdminOrders';
import OrdersHeader from 'components/Admin/Header/OrdersHeader';
const AdminOrdersPage = () => {
  return (
    <main className='adminMain'>
        <OrdersHeader />
        <div className="container-fluid">
            <AdminNav />
            <AdminOrders/>
        </div>
    </main>
  )
}

export default AdminOrdersPage