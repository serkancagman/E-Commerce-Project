import {AdminNav,AdminHeader,AdminDashboard } from "components/Admin/AdminComponents";
import React from "react";
const AdminDashboardPage = () => {
  return (
    <main className="adminMain">
      <AdminHeader header="Overview" />
      <div className="container-fluid">
        <div className="row justify-content-center">
        <AdminNav />
        <AdminDashboard />
        </div>
        
      </div>
    </main>
  );
};

export default AdminDashboardPage;
