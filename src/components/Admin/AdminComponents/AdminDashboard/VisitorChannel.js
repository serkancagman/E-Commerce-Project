import React from "react";
import adminStyle from "./style/admindashboard.module.css";
import { Doughnut } from "react-chartjs-2";
import { AiOutlineQuestionCircle,AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-router-dom";
export const VisitorChannel = () => {

   
     const channelData = [
        {
          title: "Social Media",
          value: 480,
          color: "#F7464A",
        },
        {
          title: "Email",
          value: 220,
          color: "#715CF3",
        },
        {
          title: "Google",
          value: 300,
          color: "#67CDF0",
        },
      ];
      
      const totalData = (chartData) => {
        let  total, title, rasyonel, color, final;
      
        total = chartData.reduce((acc, curr) => acc + curr.value, 0);
        final = [];
        chartData.forEach((item) => {
          rasyonel = (100 * item.value) / total;
          title = item.title;
          color = item.color;
          final = [...final, { title: title, value: rasyonel, color: color }];
          
        });
        
        return final;
      };
      
     const getChart = totalData(channelData)
     const doughnutData = {
        datasets: [
          {
            labels: getChart.map((item) => item.title),
            data: getChart,
            backgroundColor: ["#E7683F", "#715BF3", "#67CDF0"],
            borderColor: ["transparent"],
          },
        ],
      };

  return (
    <div className="col-md-6 col-lg-6 h-100">
      <div className={adminStyle.salesChartHeader}>
        <h5 className={adminStyle.chartTitle}>
          Channels{" "}
          <span className={adminStyle.questionWrapper}>
            <span className={adminStyle.questionInfo}>
              Daily orders and sales.
            </span>
            <AiOutlineQuestionCircle className={adminStyle.questionIcon} />
          </span>{" "}
        </h5>

        <div className={`dropdown ${adminStyle.salesChartBtn}`}>
          <button
            className={`btn ${adminStyle.showMoreBtn}`}
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            ...
          </button>
          <ul
            className={`dropdown-menu ${adminStyle.chartDropDownItem}`}
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
            <Link className="dropdown-item" to="/#">
            View Detail
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/#">
            Download
          </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={adminStyle.salesChartWrapper}>
        <div className={adminStyle.doughnutChart}>
          <div className={adminStyle.doghnutInner}>
            <Doughnut data={doughnutData} />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {getChart.map((item, i) => {
            return (
              <div key={i} className={adminStyle.doughnutInfo}>
                <div className={adminStyle.doughnutTitle}>
                  <span className={adminStyle.ChannelPercent}>
                    {item.value}%
                  </span>
                  <span className={adminStyle.Channelname}>
                    <span
                      className={adminStyle.pins}
                      style={{ backgroundColor: item.color }}
                    ></span>
                    {item.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <Link to="/admin/channels" className={adminStyle.downloadChartData}>
          <button className={`btn ${adminStyle.getDataBtn}`}>
            <AiOutlineDownload className={adminStyle.downloadIcon} /> Download
            Report
          </button>
        </Link>
      </div>
    </div>
  );
};
