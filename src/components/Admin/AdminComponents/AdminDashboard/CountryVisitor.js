import React from 'react';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import adminStyle from "./style/admindashboard.module.css";
const CountryVisitor = () => {

    const countryData = [
        {
          id: 1,
          countryTitle: "United States",
          countryFlag: "https://flagicons.lipis.dev/flags/4x3/um.svg",
          price: "4,335",
        },
        {
          id: 2,
          countryTitle: "United Kingdom",
          countryFlag: "https://flagicons.lipis.dev/flags/4x3/gb.svg",
          price: "2,423",
        },
        {
          id: 3,
          countryTitle: "Canada",
          countryFlag: "https://flagicons.lipis.dev/flags/4x3/ca.svg",
          price: "1,823",
        },
        {
          id: 4,
          countryTitle: "Turkey",
          countryFlag: "https://flagicons.lipis.dev/flags/4x3/tr.svg",
          price: "1,823",
        },
      ];








  return         <div className="col-md-6 col-lg-4">
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
};

export default CountryVisitor;
