import AdminNav from "components/Admin/Nav/AdminNav";
import React from "react";
import AdminStyle from "components/Admin/style/admin.module.css";


import AdminHeader from "components/Admin/Header/AdminHeader";
import AdminDashboard from "components/Admin/Pages/AdminDashboard/AdminDashboard";
const Admin = () => {


  return (
    <main className={AdminStyle.MainStyle}>
      <AdminHeader />
      <div className="container-fluid">
        
            <AdminNav />
          <AdminDashboard/>
      </div>
    </main>
  );
};

export default Admin;
