import React from "react";

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
        <a className="tree-link" href="/">
          Computers & Laptops
        </a>
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
              <a href="/" className="sub-link">
                Computer Accessories
              </a>
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
              <a href="/" className="sub-link">
                Mouses
              </a>
            </li>
            <li className="sub-item  sub-last">
              <a href="/" className="sub-link">
                Keyboards
              </a>
            </li>
            </ul>
            </li>
            <li className="sub-item">
              <a href="/" className="sub-link">
                Apple Macbook
              </a>
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
              <a href="/" className="sub-link">
                iMac
              </a>
            </li>
            <li className="sub-item  sub-last">
              <a href="/" className="sub-link">
                Macbook Pro
              </a>
            </li>
            </ul>
            </li>
            <li className="sub-item">
              <a href="/" className="sub-link">
                Cameras DSLR/SLR
              </a>
            </li>
            <li className="sub-item">
              <a href="/" className="sub-link">
                Computer Components
              </a>
            </li>
            <li className="sub-item">
              <a href="/" className="sub-link">
                Travel Cameras
              </a>
            </li>
            <li className="sub-item sub-last">
              <a href="/" className="sub-link">
                Printers & Accessories
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li className="tree-item">
        <a className="tree-link" href="/">
          Mobiles & Tablets
        </a>
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
              <a href="/" className="sub-link">
                Smartphone
              </a>
            </li>
            <li className="sub-item">
              <a href="/" className="sub-link">
                Basic Phones
              </a>
            </li>
            <li className="sub-item">
              <a href="/" className="sub-link">
                Mobile Accessories
              </a>
            </li>
            <li className="sub-item">
              <a href="/" className="sub-link">
                Tablets
              </a>
            </li>
            <li className="sub-item">
              <a href="/" className="sub-link">
                Headphones
              </a>
            </li>
            <li className="sub-item sub-last">
              <a href="/" className="sub-link">
                Landline Phones
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li className="tree-item">
        <a className="tree-link" href="/">
          TV, Video & Audio
        </a>
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
              <a href="/" className="sub-link">
                TV
              </a>
            </li>
            <li className="sub-item">
              <a href="/" className="sub-link">
                DVD, Bluray
              </a>
            </li>
            <li className="sub-item">
              <a href="/" className="sub-link">
                HD Player
              </a>
            </li>
            <li className="sub-item">
              <a href="/" className="sub-link">
                Headset
              </a>
            </li>
            <li className="sub-item">
              <a href="/" className="sub-link">
                Speaker
              </a>
            </li>
            <li className="sub-item sub-last">
              <a href="/" className="sub-link">
                Android TV Box
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li className="tree-item">
        <a className="tree-link" href="/">
          Fashion & Accessories
        </a>
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
              <a href="/" className="sub-link">
                Shoes Men
              </a>
            </li>
            <li className="sub-item">
              <a href="/" className="sub-link">
                Shoes Women
              </a>
            </li>
            <li className="sub-item">
              <a href="/" className="sub-link">
                Men's Clothes
              </a>
            </li>
            <li className="sub-item">
              <a href="/" className="sub-link">
                Women's Clothes
              </a>
            </li>
            <li className="sub-item">
              <a href="/" className="sub-link">
                Bag Men
              </a>
            </li>
            <li className="sub-item sub-last">
              <a href="/" className="sub-link">
                Bag Women
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li className="tree-item">
        <a className="tree-link" href="/">
          Watches & Accessories
        </a>
      </li>
      <li className="tree-item">
        <a className="tree-link" href="/">
          Mothers & Babies
        </a>
      </li>
      <li className="tree-item">
        <a className="tree-link" href="/">
          Sports & Outdoors
        </a>
      </li>
      <li className="tree-item">
        <a className="tree-link" href="/">
          Health & Beauty
        </a>
      </li>
      <li className="tree-item">
        <a className="tree-link" href="/">
          Home & Living
        </a>
      </li>
      <li className="tree-item">
        <a className="tree-link" href="/">
          Home Appliances
        </a>
      </li>
      <li className="tree-item">
        <a className="tree-link" href="/">
          Automotive & Gadgets
        </a>
      </li>
    </>
  );
};
