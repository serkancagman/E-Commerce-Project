import {
  AdminEditProduct,
  AdminHeader,
  AdminNav,
} from "components/Admin/AdminComponents";

import React from "react";

const AdminEditProductPage = () => {
  return (
    <main className="adminMain">
      <div className="container-fluid">
        <AdminHeader header="Product" />
        <div className="row">
          <AdminNav />
          <AdminEditProduct />
        </div>
      </div>
    </main>
  );
};

export default AdminEditProductPage;
