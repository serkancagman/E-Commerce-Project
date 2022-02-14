import React from "react";
import navStyle from "./style/adminnav.module.css";
import "../style/admin.css"
import {Link,NavLink} from "react-router-dom";
import {
  BsBarChart,
  BsFillPersonLinesFill,
  BsTruck,
  BsWallet2,
} from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiBillLine } from "react-icons/ri";
const AdminNav = () => {

  
  return (
    <>
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
            <span className={navStyle.adminName}>Antonio Conte</span>
            <p className={navStyle.adminTitle}>Sales Manager</p>
          </div>
        </div>
    <nav className={navStyle.fixedNav}>
      <ul className={navStyle.navbarNav}>
       
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
      <h6 className={navStyle.navSubHeader}>Apps</h6>
      <ul className={navStyle.navbarNav}>
        <li className={navStyle.navItem}>
          <Link to="/" className={navStyle.navLink}>
            <BsBarChart className="me-2" size={20} /> Dashboard
          </Link>
        </li>
        <li className={`dropdown ${navStyle.navItem}`}>
          <Link to="/" className={navStyle.navLink}>
            <RiBillLine className="me-2" size={20} />
            Orders
          </Link>
        </li>
        <li className={navStyle.navItem}>
          <Link to="/" className={navStyle.navLink}>
            {" "}
            <BsTruck className="me-2" size={20} />
            Products
          </Link>
        </li>
        <li className={navStyle.navItem}>
          <Link to="/" className={navStyle.navLink}>
            <BsWallet2 className="me-2" size={20} />
            Buyer
          </Link>
        </li>
        <li className={navStyle.navItem}>
          <Link to="/" className={navStyle.navLink}>
            <BsFillPersonLinesFill className="me-2" size={20} />
            Customers
          </Link>
        </li>
      </ul>
      <ul className={navStyle.navbarNav}>
        <li className={navStyle.navItem}>
          <Link to="/" className={navStyle.navLink}>
            <BsBarChart className="me-2" size={20} /> Dashboard
          </Link>
        </li>
        <li className={`dropdown ${navStyle.navItem}`}>
          <Link to="/" className={navStyle.navLink}>
            <RiBillLine className="me-2" size={20} />
            Orders
          </Link>
        </li>
        <li className={navStyle.navItem}>
          <Link to="/" className={navStyle.navLink}>
            {" "}
            <BsTruck className="me-2" size={20} />
            Products
          </Link>
        </li>
        <li className={navStyle.navItem}>
          <Link to="/" className={navStyle.navLink}>
            <BsWallet2 className="me-2" size={20} />
            Buyer
          </Link>
        </li>
        <li className={navStyle.navItem}>
          <Link to="/" className={navStyle.navLink}>
            <BsFillPersonLinesFill className="me-2" size={20} />
            Customers
          </Link>
        </li>
      </ul>
    </nav>
    </div>
   



</>
  );
};

export default AdminNav;
