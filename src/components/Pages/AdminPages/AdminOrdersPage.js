import React from "react";
import {
  AdminNav,
  AdminOrders,
  AdminHeader,
} from "components/Admin/AdminComponents";
import "components/Admin/style/admin.css";

const AdminOrdersPage = () => {
  return (
    <main className="adminMain">
      <AdminHeader header="Orders" />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <AdminNav />
          <AdminOrders />
        </div>
      </div>
    </main>
  );
};

export default AdminOrdersPage;
