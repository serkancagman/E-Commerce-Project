import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, FreeMode, Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css";
import adminStyle from "./style/admindashboard.module.css";
import { MdPriceCheck } from "react-icons/md";
import { BsArrowUp, BsBasket, BsCreditCard2Front } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  salesData,
  salesOptions,
  ordersData,
  orderDataOptions,
  getChart,
  saleMiniData,
  recentReviews,
} from "components/Admin/AdminChartDatas/AdminCharts";
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
import { AiOutlineDownload } from "react-icons/ai";
import { Doughnut, Line } from "react-chartjs-2";
const AdminDashboard = () => {
  SwiperCore.use([FreeMode, Pagination, Navigation, Autoplay, Mousewheel]);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  // DOUGHNUT CHART ITEMS

  ChartJS.register(ArcElement, Tooltip, Legend);



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


  // REVIEW SLIDE







  return (
    <section className={adminStyle.dashboardMain}>
      <div className="row justify-content-between g-4 flex-wrap">
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
                <option value="0">January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
              </select>
            </div>

            <Line options={salesOptions} data={salesData} />
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
                <AiOutlineDownload className={adminStyle.downloadIcon} />{" "}
                Download Report
              </button>
            </Link>
          </div>
        </div>

        
          <div className="col-md-4 col-lg-4">
            <div className={adminStyle.ordersValueWrapper}>
              <div className={adminStyle.ordersHeader}>
                <BsBasket className={adminStyle.ordersIcon} />
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
              <h5 className={adminStyle.ordersTitle}>Orders</h5>
              <div className={adminStyle.ordersValueFlex}>
                <h6 className={adminStyle.orderInnerValue}>255</h6>
                <div className={adminStyle.orderInnerChart}>
                  <Line options={orderDataOptions} data={ordersData} />
                </div>
              </div>
              <span className={adminStyle.statusLastMonth}>
                Over last month 1.4%{" "}
              </span>
            </div>
          </div>

          <div className="col-md-4 col-lg-4">
            <div className={adminStyle.ordersValueWrapper}>
              <div className={adminStyle.ordersHeader}>
                <BsCreditCard2Front className={adminStyle.ordersIcon} />
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
              <h5 className={adminStyle.ordersTitle}>Sales</h5>
              <div className={adminStyle.ordersValueFlex}>
                <h6 className={adminStyle.orderInnerValue}>$3.759,00</h6>
                <div className={adminStyle.orderInnerChart}>
                  <Line options={orderDataOptions} data={saleMiniData} />
                </div>
              </div>
              <span className={adminStyle.statusLastMonth}>
                Over last month 1.9%{" "}
              </span>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className={adminStyle.ordersValueWrapper}>
              <div className={adminStyle.ordersHeader}>
              <h5 className={adminStyle.ordersTitle}>Recent Reviews</h5>
                <Link to="/#" className={adminStyle.viewMoreData}>View All</Link>
              </div>
                <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{ delay: 2000 }}

                className="mySwiper"
                
                
                >

                {
                  recentReviews.map((review) => {
                    return(
                      <SwiperSlide key={review.id}>
                        <div className={adminStyle.recentReviews}>
                          <div className={adminStyle.recentReviewsInner}>
                            <img className={adminStyle.reviewProfile} src={review.profile} alt="review" />
                            <div className={adminStyle.reviewInfo}>
                              <span className={adminStyle.reviewName}>{review.name}</span>
                              <div className={adminStyle.reviewDate}><span>{review.date}</span></div>
                              </div>
                            
                          </div>
                          <div className={adminStyle.reviewText}>{review.review}</div>
                        </div>
                      </SwiperSlide>
                    )
                  })
                }



                </Swiper>

              </div>
              
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
