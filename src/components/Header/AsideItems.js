import React from "react";

import { Link } from "react-router-dom";
export const AsideItems = () => {
  const menuNames = {
    first: "first",
    second: "second",
    thirth: "thirth",
    fourth: "fourth",
    firstInner:"firstInner",
    secondInner:"secondInner"
  };

  const [openMenuName, setOpenMenuName] = React.useState(null);
  const [innerMenuName, setInnerMenuName] = React.useState(null);

  return (
    <>
      <li className="tree-item">
        <Link className="tree-link" to="/computer&laptops">
          Computers & Laptops
        </Link>
        <span
          onClick={() => setOpenMenuName(menuNames.first) & setInnerMenuName(null)}
          className={`list-icon${
            openMenuName === menuNames.first ? " " : " open-list"
          }`}
        >
          +
        </span>
        <span
          onClick={() => setOpenMenuName(menuNames.first.null) & setInnerMenuName(menuNames.firstInner.null) }
          className={`list-icon${
            openMenuName === menuNames.first ? " open-list" : " "
          }`}
        >
          -
        </span>
        <div
          className={`sub-menu${
            openMenuName === menuNames.first ? " open-sub" : " "
          }`}
        >
          <ul className="sub-nav">
            <li className="sub-item">
              <Link to="/" className="sub-link">
                Computer Accessories
              </Link>
              <span
          onClick={() => setInnerMenuName(menuNames.firstInner)}
          className={`list-icon${
            innerMenuName === menuNames.firstInner ? " " : " open-list"
          }`}
        >
          +
        </span>
        <span
          onClick={() => setInnerMenuName(menuNames.firstInner.null)}
          className={`list-icon${
            innerMenuName === menuNames.firstInner ? " open-list" : " "
          }`}
        >
          -
        </span>
        <ul className={`in-sub  ${innerMenuName === menuNames.firstInner && openMenuName === menuNames.first ? " close-sub-in" : " "}`}>
              <li className="sub-item">
              <Link to="/" className="sub-link">
                Mouses
              </Link>
            </li>
            <li className="sub-item  sub-last">
              <Link to="/" className="sub-link">
                Keyboards
              </Link>
            </li>
            </ul>
            </li>
            <li className="sub-item">
              <Link to="/" className="sub-link">
                Apple Macbook
              </Link>
              <span
          onClick={() => setInnerMenuName(menuNames.secondInner)}
          className={`list-icon${
            innerMenuName === menuNames.secondInner ? " " : " open-list"
          }`}
        >
          +
        </span>
        <span
          onClick={() => setInnerMenuName(menuNames.secondInner.null)}
          className={`list-icon${
            innerMenuName === menuNames.secondInner ? " open-list" : " "
          }`}
        >
          -
        </span>
              <ul className={`in-sub  ${innerMenuName === menuNames.secondInner && openMenuName === menuNames.first ? " close-sub-in" : " "}`}>
              <li className="sub-item">
              <Link to="/" className="sub-link">
                iMac
              </Link>
            </li>
            <li className="sub-item  sub-last">
              <Link to="/" className="sub-link">
                Macbook Pro
              </Link>
            </li>
            </ul>
            </li>
            <li className="sub-item">
              <Link to="/" className="sub-link">
                Cameras DSLR/SLR
              </Link>
            </li>
            <li className="sub-item">
              <Link to="/" className="sub-link">
                Computer Components
              </Link>
            </li>
            <li className="sub-item">
              <Link to="/" className="sub-link">
                Travel Cameras
              </Link>
            </li>
            <li className="sub-item sub-last">
              <Link to="/" className="sub-link">
                Printers & Accessories
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li className="tree-item">
        <Link className="tree-link" to="/">
          Mobiles & Tablets
        </Link>
        <span
          onClick={() => setOpenMenuName(menuNames.second) & setInnerMenuName(null) }
          className={`list-icon${
            openMenuName === menuNames.second ? " " : " open-list"
          }`}
        >
          +
        </span>
        <span
          onClick={() => setOpenMenuName(menuNames.second.null)}
          className={`list-icon${
            openMenuName === menuNames.second ? " open-list" : " "
          }`}
        >
          -
        </span>
        <div
          className={`sub-menu${
            openMenuName === menuNames.second ? " open-sub" : " "
          }`}
        >
          <ul className="sub-nav">
            <li className="sub-item">
              <Link to="/" className="sub-link">
                Smartphone
              </Link>
            </li>
            <li className="sub-item">
              <Link to="/" className="sub-link">
                Basic Phones
              </Link>
            </li>
            <li className="sub-item">
              <Link to="/" className="sub-link">
                Mobile Accessories
              </Link>
            </li>
            <li className="sub-item">
              <Link to="/" className="sub-link">
                Tablets
              </Link>
            </li>
            <li className="sub-item">
              <Link to="/" className="sub-link">
                Headphones
              </Link>
            </li>
            <li className="sub-item sub-last">
              <Link to="/" className="sub-link">
                Landline Phones
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li className="tree-item">
        <Link className="tree-link" to="/">
          TV, Video & Audio
        </Link>
        <span
          onClick={() => setOpenMenuName(menuNames.thirth) & setInnerMenuName(null)}
          className={`list-icon${
            openMenuName === menuNames.thirth ? " " : " open-list"
          }`}
        >
          +
        </span>
        <span
          onClick={() => setOpenMenuName(menuNames.thirth.null)}
          className={`list-icon${
            openMenuName === menuNames.thirth ? " open-list" : " "
          }`}
        >
          -
        </span>
        <div
          className={`sub-menu${
            openMenuName === menuNames.thirth ? " open-sub" : " "
          }`}
        >
          <ul className="sub-nav">
            <li className="sub-item">
              <Link to="/" className="sub-link">
                TV
              </Link>
            </li>
            <li className="sub-item">
              <Link to="/" className="sub-link">
                DVD, Bluray
              </Link>
            </li>
            <li className="sub-item">
              <Link to="/" className="sub-link">
                HD Player
              </Link>
            </li>
            <li className="sub-item">
              <Link to="/" className="sub-link">
                Headset
              </Link>
            </li>
            <li className="sub-item">
              <Link to="/" className="sub-link">
                Speaker
              </Link>
            </li>
            <li className="sub-item sub-last">
              <Link to="/" className="sub-link">
                Android TV Box
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li className="tree-item">
        <Link className="tree-link" to="/">
          Fashion & Accessories
        </Link>
        <span
          onClick={() => setOpenMenuName(menuNames.fourth) & setInnerMenuName(null)}
          className={`list-icon${
            openMenuName === menuNames.fourth ? " " : " open-list"
          }`}
        >
          +
        </span>
        <span
          onClick={() => setOpenMenuName(menuNames.fourth.null)}
          className={`list-icon${
            openMenuName === menuNames.fourth ? " open-list" : " "
          }`}
        >
          -
        </span>
        <div
          className={`sub-menu${
            openMenuName === menuNames.fourth ? " open-sub" : " "
          }`}
        >
          <ul className="sub-nav">
            <li className="sub-item">
              <Link to="/" className="sub-link">
                Shoes Men
              </Link>
            </li>
            <li className="sub-item">
              <Link to="/" className="sub-link">
                Shoes Women
              </Link>
            </li>
            <li className="sub-item">
              <Link to="/" className="sub-link">
                Men's Clothes
              </Link>
            </li>
            <li className="sub-item">
              <Link to="/" className="sub-link">
                Women's Clothes
              </Link>
            </li>
            <li className="sub-item">
              <Link to="/" className="sub-link">
                Bag Men
              </Link>
            </li>
            <li className="sub-item sub-last">
              <Link to="/" className="sub-link">
                Bag Women
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li className="tree-item">
        <Link className="tree-link" to="/">
          Watches & Accessories
        </Link>
      </li>
      <li className="tree-item">
        <Link className="tree-link" to="/">
          Mothers & Babies
        </Link>
      </li>
      <li className="tree-item">
        <Link className="tree-link" to="/">
          Sports & Outdoors
        </Link>
      </li>
      <li className="tree-item">
        <Link className="tree-link" to="/">
          Health & Beauty
        </Link>
      </li>
      <li className="tree-item">
        <Link className="tree-link" to="/">
          Home & Living
        </Link>
      </li>
      <li className="tree-item">
        <Link className="tree-link" to="/">
          Home Appliances
        </Link>
      </li>
      <li className="tree-item">
        <Link className="tree-link" to="/">
          Automotive & Gadgets
        </Link>
      </li>
    </>
  );
};
