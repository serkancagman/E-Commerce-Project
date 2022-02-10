import AdminNav from "components/Admin/Nav/AdminNav";
import React from "react";

import AdminHeader from "components/Admin/Header/AdminHeader";
import AdminDashboard from "components/Admin/Pages/AdminDashboard/AdminDashboard";
const AdminDashboardPage = () => {
  return (
    <main className="adminMain">
      <AdminHeader />
      <div className="container-fluid">
        <AdminNav />
        <AdminDashboard />
      </div>
    </main>
  );
};

export default AdminDashboardPage;
