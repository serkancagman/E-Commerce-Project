import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ElectronicItems } from "./ElectronicItems";
import Computer from "../../images/computers.jpg";
import Tablet from "../../images/tablets.jpg";
import TV from "../../images/tv.jpg";
import Fashion from "../../images/fashion.jpg";
import Watch from "../../images/watch.jpg";
import Mother from "../../images/mothers-babies.jpg";

export const Navbar = ({ handleAside }) => {
  const openerMenus = {
    firstMenu: "firstMenu",
    secondMenu: "secondMenu",
    thirthMenu: "thirthMenu",
    fourthMenu: "fourthMenu",
    fifthMenu: "fifthMenu",
    sixthMenu: "sixthMenu",
    seventhMenu: "seventhMenu"
  };

  const [selectedMenu, setSelectedMenu] = React.useState(null);

  return (
    <nav className="navbar navbar-expand-lg p-0">
      <div
        onClick={handleAside}
        className="get-side-menu d-flex justify-content-center align-items-center"
      >
        <GiHamburgerMenu size={22} className="pb-1" />
        <span className="aside-headers ms-3">SHOP BY DEPARTMENT</span>
      </div>
      <ul className="navbar-nav mx-auto">
        <li
          onMouseMove={() => setSelectedMenu(openerMenus.firstMenu)}
          onMouseOut={() => setSelectedMenu(openerMenus.firstMenu.null)}
          className="nav-item"
        >
          <a className="nav-link" href="/shop">
            <span>SHOP</span>
          </a>
          <div
            className={`shop-opener bg-light p-2${
              selectedMenu === openerMenus.firstMenu ? " opened-menu" : " "
            }`}
          >
            <h5 className="shop-header ">COMPUTERS & LAPTOPS</h5>
            <ul className="shop-menu p-2 d-flex justfiy-content-center flex-wrap align-items-center">
              <li className="shop-item">
                <a href="/" className="shop-link">
                  Computer Accessories
                </a>
              </li>
              <li className="shop-item">
                <a href="/" className="shop-link">
                  Apple Macbook
                </a>
              </li>
              <li className="shop-item">
                <a href="/" className="shop-link">
                  Cameras DSLR/SLR
                </a>
              </li>
              <li className="shop-item">
                <a href="/" className="shop-link">
                  Computer Components
                </a>
              </li>
              <li className="shop-item">
                <a href="/" className="shop-link">
                  Travel Cameras
                </a>
              </li>
              <li className="shop-item">
                <a href="/" className="shop-link">
                  Printers & Accessories
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li
          onMouseMove={() => setSelectedMenu(openerMenus.secondMenu)}
          onMouseOut={() => setSelectedMenu(openerMenus.secondMenu.null)}
          className="nav-item"
        >
          <a className="nav-link" href="/shop">
            ELECTRONIC
          </a>

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
          <a className="nav-link" href="/shop">
            FASHION
          </a>
          <span className="link-info new">NEW</span>
          <div
            className={`fashion-menu bg-light${
              selectedMenu === openerMenus.thirthMenu ? " opened-menu" : ""
            }`}
          >
            <div className="fashion-menu-area">
              <ul className="fashion-nav">
                <a href="/" className="fashion-header">
                  COMPUTERS & LAPTOPS
                </a>
                <li className="fashion-item">
                  <a href="/" className="fashion-link">
                    Computer Accessories
                  </a>
                </li>
                <li className="fashion-item">
                  <a href="/" className="fashion-link">
                    Keybords
                  </a>
                </li>
                <li className="fashion-item">
                  <a href="/" className="fashion-link">
                    Laptops
                  </a>
                </li>
                <li className="fashion-item">
                  <a href="/" className="fashion-link">
                    Apple Macbook
                  </a>
                </li>
                <li className="fashion-item">
                  <a href="/" className="fashion-link">
                    Microphone
                  </a>
                </li>
                <li className="fashion-item">
                  <a href="/" className="fashion-link">
                    Handphone
                  </a>
                </li>
              </ul>
              <ul className="fashion-nav">
                <a href="/" className="fashion-header">
                  TV, VIDEO & AUDIO
                </a>
                <li className="fashion-item">
                  <a href="/" className="fashion-link">
                    Computer Accessories
                  </a>
                </li>
                <li className="fashion-item">
                  <a href="/" className="fashion-link">
                    Keybords
                  </a>
                </li>
                <li className="fashion-item">
                  <a href="/" className="fashion-link">
                    Laptops
                  </a>
                </li>
                <li className="fashion-item">
                  <a href="/" className="fashion-link">
                    Apple Macbook
                  </a>
                </li>
                <li className="fashion-item">
                  <a href="/" className="fashion-link">
                    Microphone
                  </a>
                </li>
                <li className="fashion-item">
                  <a href="/" className="fashion-link">
                    Handphone
                  </a>
                </li>
              </ul>
              <ul className="fashion-nav">
                <a href="/" className="fashion-header">
                  MOBILES & TABLETS
                </a>
                <li className="fashion-item">
                  <a href="/" className="fashion-link">
                    Computer Accessories
                  </a>
                </li>
                <li className="fashion-item">
                  <a href="/" className="fashion-link">
                    Keybords
                  </a>
                </li>
                <li className="fashion-item">
                  <a href="/" className="fashion-link">
                    Laptops
                  </a>
                </li>
                <li className="fashion-item">
                  <a href="/" className="fashion-link">
                    Apple Macbook
                  </a>
                </li>
                <li className="fashion-item">
                  <a href="/" className="fashion-link">
                    Microphone
                  </a>
                </li>
                <li className="fashion-item">
                  <a href="/" className="fashion-link">
                    Handphone
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li 
        onMouseMove={() => setSelectedMenu(openerMenus.fourthMenu)}
          onMouseOut={() => setSelectedMenu(openerMenus.fourthMenu.null)}
        className="nav-item">
          <a className="nav-link" href="/shop">
            APPLIANCES
          </a>
          <div className={`appliance-menu bg-light${
            selectedMenu === openerMenus.fourthMenu ? " opened-menu" : ""
          }`}>
            <a href="/" className="appliance-header">
              COMPUTERS & LAPTOPS
            </a>
            <div className="appliance-area">
              <ul className="appliance-nav">
                <li className="appliance-item">
                  <a href="/" className="appliance-link">
                    Computer Accessories
                  </a>
                </li>
                <li className="appliance-item">
                  <a href="/" className="appliance-link">
                    Apple Macbook
                  </a>
                </li>
                <li className="appliance-item">
                  <a href="/" className="appliance-link">
                    Computer Components
                  </a>
                </li>
                <li className="appliance-item">
                  <a href="/" className="appliance-link">
                    Travel Cameras
                  </a>
                </li>
                <li className="appliance-item">
                  <a href="/" className="appliance-link">
                    Cameras DSLR/SLR
                  </a>
                </li>
                <li className="appliance-item">
                  <a href="/" className="appliance-link">
                    Printers & Accessories
                  </a>
                </li>
              </ul>
              <div className="appliance-set-header w-100 my-2">
              <a href="/" className="appliance-header">
              MOBILES & TABLETS
            </a>
              </div>
              <ul className="appliance-nav">
                <li className="appliance-item">
                  <a href="/" className="appliance-link">
                    Computer Accessories
                  </a>
                </li>
                <li className="appliance-item">
                  <a href="/" className="appliance-link">
                    Apple Macbook
                  </a>
                </li>
                <li className="appliance-item">
                  <a href="/" className="appliance-link">
                    Computer Components
                  </a>
                </li>
                <li className="appliance-item">
                  <a href="/" className="appliance-link">
                    Travel Cameras
                  </a>
                </li>
                <li className="appliance-item">
                  <a href="/" className="appliance-link">
                    Cameras DSLR/SLR
                  </a>
                </li>
                <li className="appliance-item">
                  <a href="/" className="appliance-link">
                    Printers & Accessories
                  </a>
                </li>
              </ul>
              <div className="appliance-set-header w-100 my-2">
              <a href="/" className="appliance-header">
              TV, VIDEO & AUDIO
            </a>
              </div>
              <ul className="appliance-nav">
                <li className="appliance-item">
                  <a href="/" className="appliance-link">
                    Computer Accessories
                  </a>
                </li>
                <li className="appliance-item">
                  <a href="/" className="appliance-link">
                    Apple Macbook
                  </a>
                </li>
                <li className="appliance-item">
                  <a href="/" className="appliance-link">
                    Computer Components
                  </a>
                </li>
                <li className="appliance-item">
                  <a href="/" className="appliance-link">
                    Travel Cameras
                  </a>
                </li>
                <li className="appliance-item">
                  <a href="/" className="appliance-link">
                    Cameras DSLR/SLR
                  </a>
                </li>
                <li className="appliance-item">
                  <a href="/" className="appliance-link">
                    Printers & Accessories
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li onMouseMove={() => setSelectedMenu(openerMenus.fifthMenu)}
        onMouseOut={() => setSelectedMenu(openerMenus.fifthMenu.null)} className="nav-item">
          <a className="nav-link" href="/shop">
            SALES
          </a>
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
        <li onMouseMove={() => setSelectedMenu(openerMenus.sixthMenu)}
        onMouseOut={() => setSelectedMenu(openerMenus.sixthMenu.null)} className="nav-item">
          <a className="nav-link" href="/shop">
            BRANDS
          </a>
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
        <li onMouseMove={() => setSelectedMenu(openerMenus.seventhMenu)}
        onMouseOut={() => setSelectedMenu(openerMenus.seventhMenu.null)} className="nav-item">
          <a className="nav-link" href="/shop">
            FEATURES
          </a>
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
      <div className="promotion-title">
        Spend €120 more and get free shipping!
      </div>
    </nav>
  );
};
