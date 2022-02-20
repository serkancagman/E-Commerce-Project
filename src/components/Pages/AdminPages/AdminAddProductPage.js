import {
  AdminHeader,
  AddProduct,
  AdminNav,
} from "components/Admin/AdminComponents";
import React from "react";

const AdminAddProductPage = () => {
  return (
    <main className="adminMain">
      <AdminHeader header="Product" />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <AdminNav />
          <AddProduct />
        </div>
      </div>
    </main>
  );
};

export default AdminAddProductPage;
