import React from "react";
import SalesChart from "./SalesChart";
import { VisitorChannel } from "./VisitorChannel";
import OrderChart from "./OrderChart";
import SalesTotalSub from "./SalesTotalSub";
import CountryVisitor from "./CountryVisitor";
import CustomerRating from "./CustomerRating";
import RecentReviews from "./RecentReviews";
import OrderProducts from "./OrderProducts";
import ActivityOverview from "./ActivityOverview";
import AdminFooter from "components/Admin/Footer/AdminFooter";
const AdminDashboard = () => {
  return (
    <>
    <div className="col-md-12 col-lg-10">
      <div className="row justify-content-between g-4 flex-wrap">
        <SalesChart />
        <VisitorChannel />
        <OrderChart />
        <SalesTotalSub />
        <RecentReviews />
        <CustomerRating />
        <OrderProducts />
        <CountryVisitor />
        <ActivityOverview/>
        <AdminFooter/>
      </div>
    </div>
    
    </>
  );
};

export default AdminDashboard;
