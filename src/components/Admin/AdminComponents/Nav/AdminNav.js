import React from "react";
import navStyle from "./style/adminnav.module.css";
import "../../style/admin.css";
import { Link, NavLink } from "react-router-dom";
import { BsBarChart, BsFillPersonLinesFill, BsTruck } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiBillLine } from "react-icons/ri";
import { AuthLoginContext } from "context";
const AdminNav = () => {
  const { user } = React.useContext(AuthLoginContext);
  console.log(user);
  return (
    <>
      <div className={`col-md-2 col-lg-2 ${navStyle.leftMenu}`}>
        <div className={navStyle.adminNavigation}>
          <div className={navStyle.AdminInfo}>
            <div className={navStyle.adminImg}>
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className={navStyle.adminNameWrapper}>
              <span className={navStyle.adminName}>{user && user.email}</span>
              <p className={navStyle.adminTitle}>Sales Manager</p>
            </div>
          </div>
          <nav className={`navbar-expand-lg ${navStyle.fixedNav}`}>
            <div className={`w-100 ${navStyle.normalNav}`}>
              <ul className={navStyle.navbarNav}>
                <h6 className={navStyle.navSubHeader}>E-commerce</h6>
                <li className={navStyle.navItem}>
                  <NavLink to="/admin/dashboard" className={navStyle.navLink}>
                    <BsBarChart className="me-2" size={20} /> Dashboard
                  </NavLink>
                </li>
                <li className={`dropdown ${navStyle.navItem}`}>
                  <NavLink to="/admin/orders" className={navStyle.navLink}>
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
                  <NavLink
                    to="/admin/add/products"
                    className={navStyle.navLink}
                  >
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
          </nav>
        </div>
      </div>
    </>
  );
};

export default AdminNav;
