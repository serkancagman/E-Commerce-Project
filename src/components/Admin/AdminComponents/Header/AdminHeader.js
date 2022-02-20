import React from "react";
import AdminStyle from "./style/adminheader.module.css";
import navStyle from "../Nav/style/adminnav.module.css";
import { Link,NavLink } from "react-router-dom";
import Logo from "images/adminlogo.png";
import { BsSearch, BsPlusCircle, BsCart2, BsBarChart, BsTruck, BsFillPersonLinesFill } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
const AdminHeader = ({header}) => {
  return (
    <header className={`py-3 mb-2 ${AdminStyle.MainHeader}`}>
      <div className="container-fluid">
        <div className={`row justify-content-between align-items-center ${navStyle.mobileHeader}`}>
          <div className="col-md-3 col-lg-3 position-relative">
            <div className="d-flex justify-content-between align-items-center">
            <Link to="/admin" className={`navbar-brand ${AdminStyle.navBrand}`}>
              <img
                className={`img-fluid ${AdminStyle.logo}`}
                src={Logo}
                alt="logo"
              />
            </Link>
            
            <button class={`btn ${navStyle.hamburgerBtn}`} type="button" data-bs-toggle="collapse" data-bs-target="#adminMobileNav" aria-expanded="false" aria-controls="collapseExample">
      <GiHamburgerMenu/>
  </button>
  </div>

  <div id="adminMobileNav" className="navbar-collapse collapse">
    <div className="w-100">
    <ul className={`${navStyle.navbarNav} ${navStyle.mobileNav}`}>
        <h6 className={navStyle.navSubHeader}>E-commerce</h6>
        <li className={navStyle.navItem}>
          <NavLink to="/admin/dashboard" className={navStyle.navLink}>
            <BsBarChart className="me-2" size={20} /> Dashboard
          </NavLink>
        </li>
        <li className={`dropdown ${navStyle.navItem}`}>
          <NavLink   to="/admin/orders" className={navStyle.navLink}>
            <RiBillLine className="me-2" size={20} />
            Orders
          </NavLink>
        </li>
        <li className={navStyle.navItem}>
          <NavLink to="/admin/products" className={navStyle.navLink}>
            {" "}
            <BsTruck className="me-2" size={20} />
            Products
          </NavLink>
        </li>
        <li className={navStyle.navItem}>
          <NavLink to="/admin/add/products" className={navStyle.navLink}>
            <IoIosAddCircleOutline className="me-2" size={20} />
            Add Product
          </NavLink>
        </li>
        <li className={navStyle.navItem}>
          <Link to="/" className={navStyle.navLink}>
            <BsFillPersonLinesFill className="me-2" size={20} />
            Customers
          </Link>
        </li>
      </ul>
    </div>
    </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div
              className={`d-flex justify-content-center align-items-center ${AdminStyle.searchWrapper}`}
            >
              <span className={AdminStyle.searchText}>{header}</span>
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
                  <BsPlusCircle />
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
