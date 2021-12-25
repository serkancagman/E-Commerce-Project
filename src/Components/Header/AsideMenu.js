import React from "react";
import { GrFormClose } from "react-icons/gr";
import { AsideItems } from "./AsideItems";
export const AsideMenu = ({ handleAside, asideActive }) => {
  return (
    <aside
      className={asideActive ? "show-aside" : "close-aside"}
      id="aside-menu"
             >
      <div className="aside-area">
        <div className="aside-header">
          MENU
          <GrFormClose size={25} id="close-aside" onClick={handleAside} />
        </div>
        <div className="p-3 aside-category-tree">
          <ul className="tree-main">
            <AsideItems/>
          </ul>
        </div>
      </div>
    </aside>
  );
};
