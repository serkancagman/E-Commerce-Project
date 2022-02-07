import React from "react";
import AdminStyle from "./style/adminheader.module.css";
import { Link } from "react-router-dom";
import Logo from "images/adminlogo.png";
import { BsSearch, BsPlusCircle, BsCart2 } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
const AdminHeader = () => {
  return (
    <header className={`py-3 mb-2 ${AdminStyle.MainHeader}`}>
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-3 col-lg-3">
            <Link to="/admin" className={`navbar-brand ${AdminStyle.navBrand}`}>
              <img
                className={`img-fluid ${AdminStyle.logo}`}
                src={Logo}
                alt="logo"
              />
            </Link>
          </div>

          <div className="col-md-6 col-lg-6">
            <div
              className={`d-flex justify-content-center align-items-center ${AdminStyle.searchWrapper}`}
            >
              <span className={AdminStyle.searchText}>Overview</span>
              <form className="w-100">
                <div className="input-group">
                  <input
                    type="text"
                    className={`form-control ${AdminStyle.search}`}
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className={`btn ${AdminStyle.searchBtn}`}
                    type="button"
                    id="button-addon2"
                  >
                    <BsSearch />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-lg-3">
            <div className={AdminStyle.rightNav}>
              <div className={AdminStyle.rightIcons}>
                <div className={AdminStyle.rightNavItem}>
                  <MdNotifications size={24} />
                  <span className={AdminStyle.alertInfo}>0</span>
                </div>
                <div className={AdminStyle.rightNavItem}>
                  <BsCart2 size={24} />
                  <span className={AdminStyle.alertInfo}>0</span>
                </div>
              </div>
              <Link to="/admin/profile" className={AdminStyle.addProductLink}>
                <button className={`btn ms-3 ${AdminStyle.addProductBtn}`}>
                  <BsPlusCircle className="" />
                  <span className="mx-2">Add Product</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
