import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch, BsCart4 } from "react-icons/bs";
import { ElectronicItems } from "./ElectronicItems";
import Computer from "../../images/computers.jpg";
import Tablet from "../../images/tablets.jpg";
import TV from "../../images/tv.jpg";
import Fashion from "../../images/fashion.jpg";
import Watch from "../../images/watch.jpg";
import Mother from "../../images/mothers-babies.jpg";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

const Navbar = ({ handleAside, onSticky, updateUser, loginUser, showCart }) => {
  const openerMenus = {
    firstMenu: "firstMenu",
    secondMenu: "secondMenu",
    thirthMenu: "thirthMenu",
    fourthMenu: "fourthMenu",
    fifthMenu: "fifthMenu",
    sixthMenu: "sixthMenu",
    seventhMenu: "seventhMenu",
  };

  const [selectedMenu, setSelectedMenu] = React.useState(null);

  return (
    <nav
      className={` navbar navbar-expand-lg p-0 ${
        onSticky.sticky ? " mainNav fixed-top   " : ""
      }  `}
    >
      <div
        onClick={handleAside}
        className="get-side-menu d-flex justify-content-center align-items-center"
      >
        <GiHamburgerMenu size={22} className="pb-1" />
        <span className="aside-headers ms-3">CATEGORIES</span>
      </div>
      <ul className="navbar-nav mx-auto">
        <li
          onMouseMove={() => setSelectedMenu(openerMenus.firstMenu)}
          onMouseOut={() => setSelectedMenu(openerMenus.firstMenu.null)}
          className="nav-item"
        >
          <Link className="nav-link" to="/shop">
            <span>SHOP</span>
          </Link>
          <div
            className={`shop-opener bg-light p-2${
              selectedMenu === openerMenus.firstMenu ? " opened-menu" : " "
            }`}
          >
            <h5 className="shop-header ">COMPUTERS & LAPTOPS</h5>
            <ul className="shop-menu p-2 d-flex justfiy-content-center flex-wrap align-items-center">
              <li className="shop-item">
                <Link to="/" className="shop-link">
                  Computer Accessories
                </Link>
              </li>
              <li className="shop-item">
                <Link to="/" className="shop-link">
                  Apple Macbook
                </Link>
              </li>
              <li className="shop-item">
                <Link to="/" className="shop-link">
                  Cameras DSLR/SLR
                </Link>
              </li>
              <li className="shop-item">
                <Link to="/" className="shop-link">
                  Computer Components
                </Link>
              </li>
              <li className="shop-item">
                <Link to="/" className="shop-link">
                  Travel Cameras
                </Link>
              </li>
              <li className="shop-item">
                <Link to="/" className="shop-link">
                  Printers & Accessories
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li
          onMouseMove={() => setSelectedMenu(openerMenus.secondMenu)}
          onMouseOut={() => setSelectedMenu(openerMenus.secondMenu.null)}
          className="nav-item"
        >
          <Link className="nav-link" to="/shop">
            ELECTRONIC
          </Link>

          <div
            className={`electronic-menu bg-light position-absolute p-2${
              selectedMenu === openerMenus.secondMenu ? " opened-menu" : ""
            }`}
          >
            <div className="d-flex flex-wrap justify-content-center align-items-center electronic-menu-area">
              <ElectronicItems imgURL={Computer} header="COMPUTERS & LAPTOPS" />
              <ElectronicItems imgURL={Tablet} header="MOBILES & TABLETS" />
              <ElectronicItems imgURL={TV} header="TV, VIDEO & AUDIO" />
              <ElectronicItems
                imgURL={Fashion}
                header="FASHION & ACCESSORIES"
              />
              <ElectronicItems imgURL={Watch} header="WATCHES & ACCESSORIES" />
              <ElectronicItems imgURL={Mother} header="MOTHERS & BABIES" />
            </div>
          </div>
        </li>
        <li
          onMouseMove={() => setSelectedMenu(openerMenus.thirthMenu)}
          onMouseOut={() => setSelectedMenu(openerMenus.thirthMenu.null)}
          className="nav-item"
        >
          <Link className="nav-link" to="/shop">
            FASHION
          </Link>
          <span className="link-info new">NEW</span>
          <div
            className={`fashion-menu bg-light${
              selectedMenu === openerMenus.thirthMenu ? " opened-menu" : ""
            }`}
          >
            <div className="fashion-menu-area">
              <ul className="fashion-nav">
                <Link to="/" className="fashion-header">
                  COMPUTERS & LAPTOPS
                </Link>
                <li className="fashion-item">
                  <Link to="/" className="fashion-link">
                    Computer Accessories
                  </Link>
                </li>
                <li className="fashion-item">
                  <Link to="/" className="fashion-link">
                    Keybords
                  </Link>
                </li>
                <li className="fashion-item">
                  <Link to="/" className="fashion-link">
                    Laptops
                  </Link>
                </li>
                <li className="fashion-item">
                  <Link to="/" className="fashion-link">
                    Apple Macbook
                  </Link>
                </li>
                <li className="fashion-item">
                  <Link to="/" className="fashion-link">
                    Microphone
                  </Link>
                </li>
                <li className="fashion-item">
                  <Link to="/" className="fashion-link">
                    Handphone
                  </Link>
                </li>
              </ul>
              <ul className="fashion-nav">
                <Link to="/" className="fashion-header">
                  TV, VIDEO & AUDIO
                </Link>
                <li className="fashion-item">
                  <Link to="/" className="fashion-link">
                    Computer Accessories
                  </Link>
                </li>
                <li className="fashion-item">
                  <Link to="/" className="fashion-link">
                    Keybords
                  </Link>
                </li>
                <li className="fashion-item">
                  <Link to="/" className="fashion-link">
                    Laptops
                  </Link>
                </li>
                <li className="fashion-item">
                  <Link to="/" className="fashion-link">
                    Apple Macbook
                  </Link>
                </li>
                <li className="fashion-item">
                  <Link to="/" className="fashion-link">
                    Microphone
                  </Link>
                </li>
                <li className="fashion-item">
                  <Link to="/" className="fashion-link">
                    Handphone
                  </Link>
                </li>
              </ul>
              <ul className="fashion-nav">
                <Link to="/" className="fashion-header">
                  MOBILES & TABLETS
                </Link>
                <li className="fashion-item">
                  <Link to="/" className="fashion-link">
                    Computer Accessories
                  </Link>
                </li>
                <li className="fashion-item">
                  <Link to="/" className="fashion-link">
                    Keybords
                  </Link>
                </li>
                <li className="fashion-item">
                  <Link to="/" className="fashion-link">
                    Laptops
                  </Link>
                </li>
                <li className="fashion-item">
                  <Link to="/" className="fashion-link">
                    Apple Macbook
                  </Link>
                </li>
                <li className="fashion-item">
                  <Link to="/" className="fashion-link">
                    Microphone
                  </Link>
                </li>
                <li className="fashion-item">
                  <Link to="/" className="fashion-link">
                    Handphone
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          onMouseMove={() => setSelectedMenu(openerMenus.fourthMenu)}
          onMouseOut={() => setSelectedMenu(openerMenus.fourthMenu.null)}
          className="nav-item"
        >
          <Link className="nav-link" to="/shop">
            APPLIANCES
          </Link>
          <div
            className={`appliance-menu bg-light${
              selectedMenu === openerMenus.fourthMenu ? " opened-menu" : ""
            }`}
          >
            <Link to="/" className="appliance-header">
              COMPUTERS & LAPTOPS
            </Link>
            <div className="appliance-area">
              <ul className="appliance-nav">
                <li className="appliance-item">
                  <Link to="/" className="appliance-link">
                    Computer Accessories
                  </Link>
                </li>
                <li className="appliance-item">
                  <Link to="/" className="appliance-link">
                    Apple Macbook
                  </Link>
                </li>
                <li className="appliance-item">
                  <Link to="/" className="appliance-link">
                    Computer Components
                  </Link>
                </li>
                <li className="appliance-item">
                  <Link to="/" className="appliance-link">
                    Travel Cameras
                  </Link>
                </li>
                <li className="appliance-item">
                  <Link to="/" className="appliance-link">
                    Cameras DSLR/SLR
                  </Link>
                </li>
                <li className="appliance-item">
                  <Link to="/" className="appliance-link">
                    Printers & Accessories
                  </Link>
                </li>
              </ul>
              <div className="appliance-set-header w-100 my-2">
                <Link to="/" className="appliance-header">
                  MOBILES & TABLETS
                </Link>
              </div>
              <ul className="appliance-nav">
                <li className="appliance-item">
                  <Link to="/" className="appliance-link">
                    Computer Accessories
                  </Link>
                </li>
                <li className="appliance-item">
                  <Link to="/" className="appliance-link">
                    Apple Macbook
                  </Link>
                </li>
                <li className="appliance-item">
                  <Link to="/" className="appliance-link">
                    Computer Components
                  </Link>
                </li>
                <li className="appliance-item">
                  <Link to="/" className="appliance-link">
                    Travel Cameras
                  </Link>
                </li>
                <li className="appliance-item">
                  <Link to="/" className="appliance-link">
                    Cameras DSLR/SLR
                  </Link>
                </li>
                <li className="appliance-item">
                  <Link to="/" className="appliance-link">
                    Printers & Accessories
                  </Link>
                </li>
              </ul>
              <div className="appliance-set-header w-100 my-2">
                <Link to="/" className="appliance-header">
                  TV, VIDEO & AUDIO
                </Link>
              </div>
              <ul className="appliance-nav">
                <li className="appliance-item">
                  <Link to="/" className="appliance-link">
                    Computer Accessories
                  </Link>
                </li>
                <li className="appliance-item">
                  <Link to="/" className="appliance-link">
                    Apple Macbook
                  </Link>
                </li>
                <li className="appliance-item">
                  <Link to="/" className="appliance-link">
                    Computer Components
                  </Link>
                </li>
                <li className="appliance-item">
                  <Link to="/" className="appliance-link">
                    Travel Cameras
                  </Link>
                </li>
                <li className="appliance-item">
                  <Link to="/" className="appliance-link">
                    Cameras DSLR/SLR
                  </Link>
                </li>
                <li className="appliance-item">
                  <Link to="/" className="appliance-link">
                    Printers & Accessories
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          onMouseMove={() => setSelectedMenu(openerMenus.fifthMenu)}
          onMouseOut={() => setSelectedMenu(openerMenus.fifthMenu.null)}
          className="nav-item"
        >
          <Link className="nav-link" to="/shop">
            SALES
          </Link>
          <div
            className={`electronic-menu bg-light sales-menu position-absolute p-2${
              selectedMenu === openerMenus.fifthMenu ? " opened-menu" : ""
            }`}
          >
            <div className="d-flex flex-wrap justify-content-center align-items-center electronic-menu-area">
              <ElectronicItems imgURL={Computer} header="COMPUTERS & LAPTOPS" />
              <ElectronicItems imgURL={Tablet} header="MOBILES & TABLETS" />
              <ElectronicItems imgURL={TV} header="TV, VIDEO & AUDIO" />
              <ElectronicItems
                imgURL={Fashion}
                header="FASHION & ACCESSORIES"
              />
              <ElectronicItems imgURL={Watch} header="WATCHES & ACCESSORIES" />
              <ElectronicItems imgURL={Mother} header="MOTHERS & BABIES" />
            </div>
          </div>
        </li>
        <li
          onMouseMove={() => setSelectedMenu(openerMenus.sixthMenu)}
          onMouseOut={() => setSelectedMenu(openerMenus.sixthMenu.null)}
          className="nav-item"
        >
          <Link className="nav-link" to="/shop">
            BRANDS
          </Link>
          <div
            className={`electronic-menu bg-light brands-menu position-absolute p-2${
              selectedMenu === openerMenus.sixthMenu ? " opened-menu" : ""
            }`}
          >
            <div className="d-flex flex-wrap justify-content-center align-items-center electronic-menu-area">
              <ElectronicItems imgURL={Computer} header="COMPUTERS & LAPTOPS" />
              <ElectronicItems imgURL={Tablet} header="MOBILES & TABLETS" />
              <ElectronicItems imgURL={TV} header="TV, VIDEO & AUDIO" />
              <ElectronicItems
                imgURL={Fashion}
                header="FASHION & ACCESSORIES"
              />
              <ElectronicItems imgURL={Watch} header="WATCHES & ACCESSORIES" />
              <ElectronicItems imgURL={Mother} header="MOTHERS & BABIES" />
            </div>
          </div>
        </li>
        <li
          onMouseMove={() => setSelectedMenu(openerMenus.seventhMenu)}
          onMouseOut={() => setSelectedMenu(openerMenus.seventhMenu.null)}
          className="nav-item"
        >
          <Link className="nav-link" to="/shop">
            FEATURES
          </Link>
          <span className="link-info pro">PRO</span>
          <div
            className={`electronic-menu bg-light features-menu position-absolute p-2${
              selectedMenu === openerMenus.seventhMenu ? " opened-menu" : ""
            }`}
          >
            <div className="d-flex flex-wrap justify-content-center align-items-center electronic-menu-area">
              <ElectronicItems imgURL={Computer} header="COMPUTERS & LAPTOPS" />
              <ElectronicItems imgURL={Tablet} header="MOBILES & TABLETS" />
              <ElectronicItems imgURL={TV} header="TV, VIDEO & AUDIO" />
              <ElectronicItems
                imgURL={Fashion}
                header="FASHION & ACCESSORIES"
              />
              <ElectronicItems imgURL={Watch} header="WATCHES & ACCESSORIES" />
              <ElectronicItems imgURL={Mother} header="MOTHERS & BABIES" />
            </div>
          </div>
        </li>
      </ul>
      {onSticky.sticky ? (
                    <div className="middle-right">
                    <div
                      onClick={() => updateUser(!loginUser)}
                      className="login-menu"
                    >
                      <FiUser className="userIcon" size={35} color="#fff" />
      
                      <div className="login-or-register">
                        <span className="login-header">Sign in</span>
                        <span className="register-header">Create an Account</span>
                      </div>
                    </div>
                    <div onClick={showCart} className="my-cart">
                      <BsCart4 size={35} color="#fff" />
                      <div className="cart-info">
                        <span className="cart-header">My Cart</span>
                        <span className="cart-price">€0.00</span>
                      </div>
                      <span className="product-quantity">0</span>
                    </div>
                  </div>
      ) : (
        <div className="promotion-title">
          Spend €120 more and get free shipping!
        </div>
      )}
    </nav>
  );
};

export default React.memo(Navbar);
