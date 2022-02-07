import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import adminStyle from "./style/admindashboard.module.css";
import { MdPriceCheck } from "react-icons/md";
import { BsArrowUp } from "react-icons/bs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
const AdminDashboard = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [100, 200, 300, 400],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [100, 200, 300, 400],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  // DOUGHNUT CHART ITEMS

  ChartJS.register(ArcElement, Tooltip, Legend);

  const chartData = [
    {
      title:"Social Media",
      value: 480
    },
    {
      title:"Email",
      value: 220
    },
    {
      title:"Google",
      value: 300
    }
  ];
  const totalData = (chartData) => {
    let total, allData,allTitle,final;

    total = chartData.reduce((acc, curr) =>  acc + curr.value , 0);
    allData = {};
    allTitle = {};
    final = []
     chartData.map(item => {
          allData =(100 * item.value / total);
          allTitle =(item.title);
        final = [...final, {title:allTitle,value:allData}]
     });
      console.log(final)
    return final;
  };

  const getChart = totalData(chartData);

  const doughnutData = {
    
    datasets: [
      {
        labels: getChart.map((item) =>{ return( item.title)}),
        data: getChart,
        backgroundColor: ["#E7683F", "#715BF3", "#67CDF0"],
        borderColor: ["transparent"],
      },
    ],
  };

  return (
    <section className={adminStyle.dashboardMain}>
      <div className="row justify-content-between">
        <div className="col-md-6 col-lg-6">
          <div className={adminStyle.salesChartHeader}>
            <h5 className={adminStyle.chartTitle}>
              Sales Chart{" "}
              <span className={adminStyle.questionWrapper}>
                <span className={adminStyle.questionInfo}>
                  Daily orders and sales.
                </span>
                <AiOutlineQuestionCircle className={adminStyle.questionIcon} />
              </span>{" "}
            </h5>

            <div className={`dropdown ${adminStyle.salesChartBtn}`}>
              <button
                className="btn "
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
                  <a className="dropdown-item" href="#">
                    View Detail
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Download
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={adminStyle.salesChartWrapper}>
            <div className={adminStyle.saleChartInner}>
              <div
                className={`d-flex align-items-center${adminStyle.saleTotal}`}
              >
                <MdPriceCheck className={adminStyle.saleTotalIcon} />
                <h6 className={adminStyle.saleTotalTitle}>$ 10,300,00</h6>
                <span className={adminStyle.showMath}>
                  {" "}
                  <BsArrowUp /> % 8.30
                </span>
              </div>
              <select
                className={`form-select ${adminStyle.selectTime}`}
                aria-label="Default select example"
              >
                <option selected>January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
              </select>
            </div>

            <Line options={options} data={data} />
          </div>
        </div>

        <div className="col-md-6 col-lg-6">
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
                className="btn "
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
                  <a className="dropdown-item" href="#">
                    View Detail
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Download
                  </a>
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
              <div className="d-flex-justify-content-center align-items-center">
                {
                  getChart.map((item,i) =>{
                    return(
                      <div key={i} className={adminStyle.doughnutInfo}>
                        <h6 className={adminStyle.doughnutTitle}>{item.title}</h6>
                      </div>
                    )})}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
