import {
  AdminHeader,
  AdminNav,
  AdminProducts,
} from "components/Admin/AdminComponents";
import React from "react";

const AdminProductsPage = () => {
  return (
    <main className="adminMain">
      <AdminHeader header="Products" />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <AdminNav />
          <AdminProducts />
        </div>
      </div>
    </main>
  );
};

export default AdminProductsPage;
