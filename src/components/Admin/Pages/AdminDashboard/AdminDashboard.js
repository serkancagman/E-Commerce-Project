import React from "react";
import { AiFillStar, AiOutlineQuestionCircle } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  FreeMode,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";
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
  productSaleConfig,
  productData
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
  BarElement,
} from "chart.js";
import { AiOutlineDownload } from "react-icons/ai";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { FiPackage } from "react-icons/fi";
const AdminDashboard = () => {

  const countryData = [
    {
      "id":1,
      "countryTitle":"United States",
      "countryFlag":"https://flagicons.lipis.dev/flags/4x3/um.svg",
      "price":"4,335"
    },
    {
      "id":2,
      "countryTitle":"United Kingdom",
      "countryFlag":"https://flagicons.lipis.dev/flags/4x3/gb.svg",
      "price":"2,423"
    },
    {
      "id":3,
      "countryTitle":"Canada",
      "countryFlag":"https://flagicons.lipis.dev/flags/4x3/ca.svg",
      "price":"1,823"
    },
    {
      "id":4,
      "countryTitle":"Turkey",
      "countryFlag":"https://flagicons.lipis.dev/flags/4x3/tr.svg",
      "price":"1,823"
    }
  ]


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
    ChartJS.register(CategoryScale,LinearScale, PointElement,BarElement)
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
        <div className="col-md-6 col-lg-6 h-100">
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
              <Link to="/#" className={adminStyle.viewMoreData}>
                View All
              </Link>
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{ delay: 2000 }}
              className="mySwiper"
            >
              {recentReviews.map((review) => {
                return (
                  <SwiperSlide key={review.id}>
                    <div className={adminStyle.recentReviews}>
                      <div className={adminStyle.recentReviewsInner}>
                        <img
                          className={adminStyle.reviewProfile}
                          src={review.profile}
                          alt="review"
                        />
                        <div className={adminStyle.reviewInfo}>
                          <span className={adminStyle.reviewName}>
                            {review.name}
                          </span>
                          <div className={adminStyle.reviewDate}>
                            <span>{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className={adminStyle.reviewText}>
                        {review.review}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        <div className="col-md-4 col-lg-4">
          <div className={adminStyle.customerRatingWrapper}>
            <div className={adminStyle.ordersHeader}>
              <h5 className={adminStyle.ordersTitle}>Customer Rating</h5>
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

            <div className={adminStyle.ratingInner}>
              <span className={adminStyle.ratingTotal}>4.0</span>
              <div className={adminStyle.starsWrapper}>
                <span className={adminStyle.ratingStarts}>
                  <AiFillStar className={adminStyle.starItem} />
                </span>
                <span className={adminStyle.ratingStarts}>
                  <AiFillStar className={adminStyle.starItem} />
                </span>
                <span className={adminStyle.ratingStarts}>
                  <AiFillStar className={adminStyle.starItem} />
                </span>
                <span className={adminStyle.ratingStarts}>
                  <AiFillStar className={adminStyle.starItem} />
                </span>
                <span className={adminStyle.ratingStarts}>
                  <AiFillStar
                    className={`${adminStyle.starItem} ${adminStyle.starLast}`}
                  />
                </span>
                <span className={adminStyle.ratingStarts}>(310)</span>
              </div>
              <span className={adminStyle.ratingPercent}>
                <BsArrowUp /> +35{" "}
                <span className={adminStyle.ratingPercentTitle}>
                  Point from last month
                </span>
              </span>
              <div className={adminStyle.orderInnerChart}>
                <Line options={orderDataOptions} data={ordersData} />
              </div>
              <Link
                to="/admin/channels"
                className={adminStyle.downloadChartData}
              >
                <button className={`btn ${adminStyle.getDataBtn}`}>
                  <AiOutlineDownload className={adminStyle.downloadIcon} />{" "}
                  Download Report
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-4">
          <div className={adminStyle.productSaleChart}>
            <div className={adminStyle.productSaleInner}>
              <div className={adminStyle.productSaleIcon}>
                <FiPackage/>
              </div>
              <h6 className={adminStyle.productSaleHeader}>Products Sold</h6>
              <span className={adminStyle.productSoldValue}>90 Sold</span>
              <div className={adminStyle.productSaleChart}>
              <Bar options={productSaleConfig} data={productData} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-4">
        <div className={adminStyle.contriesHeaderWrapper}>
            <h5 className={adminStyle.chartTitle}>
            Your Top Countries
              <span className={adminStyle.questionWrapper}>
                <span className={adminStyle.questionInfo}>
                Sales revenue based by country
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
           <div className={adminStyle.CountriesWrapper}>
             {countryData.map((country) => {
                return (
                  <div className={adminStyle.countryItem} key={country.id}>
                    <div className={adminStyle.countryItemInner}>
                      <div className={adminStyle.countryTitle}>
                      <img
                        className={adminStyle.countryIcon}
                        src={country.countryFlag}
                        alt="country"
                      />
                      <span className={adminStyle.countryName}>
                          {country.countryTitle}
                        </span>
                      </div>
                      
                      
                        
                        <span className={adminStyle.countryValue}>
                          ${country.price}
                        </span>
                      
                    </div>
                  </div>
                );
             })}
           </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
