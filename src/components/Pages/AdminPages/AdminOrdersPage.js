import React from 'react'
import AdminNav from "components/Admin/Nav/AdminNav";
import "components/Admin/style/admin.css"
import AdminOrders from 'components/Admin/Pages/AdminOrders/AdminOrders';

import AdminHeader from 'components/Admin/Header/AdminHeader';
const AdminOrdersPage = () => {
  return (
    <main className='adminMain'>
        <AdminHeader header="Orders" />
        <div className="container-fluid">
            <AdminNav />
            <AdminOrders/>
        </div>
    </main>
  )
}

export default AdminOrdersPage