import React from "react";
import adminStyle from "./style/admindashboard.module.css";
import { BsBarChart, BsTruck } from "react-icons/bs";
import { RiBillLine } from "react-icons/ri";
import { TiLocationArrowOutline } from "react-icons/ti";
const ActivityOverview = () => {
  return (
    <div className="col-md-5 col-lg-5">
      <h6 className={adminStyle.activityOverviewHeader}>Activity Overwiew</h6>
      <div className="row align-items-center justify-content-center g-4">
        <div className="col-md-6 col-lg-6">
          <div className={adminStyle.activityOverview}>
            <div className={adminStyle.activityOverviewInner}>
              <div
                className={`${adminStyle.activityOverviewIcon} ${adminStyle.deliveredColor}`}
              >
                <BsTruck />
              </div>
              <h6 className={adminStyle.activityOverviewHeader}>Delivered</h6>
              <span className={adminStyle.activityOverviewValue}>
                15 New Packages
              </span>
              <div className={adminStyle.activityOverviewChart}>
                <span
                  className={`${adminStyle.activityOverviewChartInner} ${adminStyle.deliveredChatColor}`}
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className={adminStyle.activityOverview}>
            <div className={adminStyle.activityOverviewInner}>
              <div
                className={`${adminStyle.activityOverviewIcon} ${adminStyle.orderedColor}`}
              >
                <RiBillLine />
              </div>
              <h6 className={adminStyle.activityOverviewHeader}>Ordered</h6>
              <span className={adminStyle.activityOverviewValue}>
                65 New Items
              </span>
              <div className={adminStyle.activityOverviewChart}>
                <span
                  className={`${adminStyle.activityOverviewChartInner} ${adminStyle.orderedChatColor}`}
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className={adminStyle.activityOverview}>
            <div className={adminStyle.activityOverviewInner}>
              <div
                className={`${adminStyle.activityOverviewIcon} ${adminStyle.reportColor}`}
              >
                <BsBarChart />
              </div>
              <h6 className={adminStyle.activityOverviewHeader}>Reported</h6>
              <span className={adminStyle.activityOverviewValue}>
                15 Support New Cases
              </span>
              <div className={adminStyle.activityOverviewChart}>
                <span
                  className={`${adminStyle.activityOverviewChartInner} ${adminStyle.reportChartColor}`}
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className={adminStyle.activityOverview}>
            <div className={adminStyle.activityOverviewInner}>
              <div
                className={`${adminStyle.activityOverviewIcon} ${adminStyle.arrivedColor}`}
              >
                <TiLocationArrowOutline />
              </div>
              <h6 className={adminStyle.activityOverviewHeader}>Arrived</h6>
              <span className={adminStyle.activityOverviewValue}>
                15 Upgraded Boxed
              </span>
              <div className={adminStyle.activityOverviewChart}>
                <span
                  className={`${adminStyle.activityOverviewChartInner} ${adminStyle.arrivedChartColor}`}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityOverview;
