import React,{useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
export const Navbar = ({handleAside}) => {

    
  return (
    <nav className="navbar navbar-expand-lg ">
      <div onClick={handleAside} className="get-side-menu d-flex justify-content-center align-items-center">
        <GiHamburgerMenu size={22} 
        className="pb-1" />
        <span className="aside-header ms-3">SHOP BY DEPARTMENT</span>
      </div>
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link" href="/shop">
            SHOP
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/shop">
            ELECTRONIC
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/shop">
            FASHION
          </a>
          <span className="link-info new">NEW</span>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/shop">
            APPLIANCES
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/shop">
            SALES
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/shop">
            BRANDS
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/shop">
            FEATURES
          </a>
          <span className="link-info pro">PRO</span>
        </li>
      </ul>
      <div className="promotion-title">Spend €120 more and get free shipping!</div>
    </nav>
  );
};
