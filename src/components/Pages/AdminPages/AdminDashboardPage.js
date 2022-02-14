import AdminNav from "components/Admin/Nav/AdminNav";
import React from "react";

import AdminHeader from "components/Admin/Header/AdminHeader";
import AdminDashboard from "components/Admin/AdminComponents/AdminDashboard/AdminDashboard";
const AdminDashboardPage = () => {
  return (
    <main className="adminMain">
      <AdminHeader header="Overview" />
      <div className="container-fluid">
        <AdminNav />
        <AdminDashboard />
      </div>
    </main>
  );
};

export default AdminDashboardPage;
