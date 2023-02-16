import React from "react";
import "./styles.css";

SideBar.propTypes = {};

function SideBar(props) {
  return (
    <>
      <div className="sidebar">
        <ul className="sidebar__menu">
          <li className="sidebar__menu-item active">
            <a href="./">Home</a>
          </li>
          <li className="sidebar__menu-item">
            <a href="./">Services</a>
          </li>
          <li className="sidebar__menu-item">
            <a href="./">News</a>
          </li>
          <li className="sidebar__menu-item">
            <a href="./">Blog</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
