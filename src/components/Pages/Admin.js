import AdminNav from "components/Admin/Nav/AdminNav";
import React from "react";
import AdminStyle from "components/Admin/style/admin.css";


import AdminHeader from "components/Admin/Header/AdminHeader";
import AdminDashboard from "components/Admin/Pages/AdminDashboard/AdminDashboard";
const Admin = () => {


  return (
    <main className="adminMain">
      <AdminHeader />
      <div className="container-fluid">
        
            <AdminNav />
          <AdminDashboard/>
      </div>
    </main>
  );
};

export default Admin;
