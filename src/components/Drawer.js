import React, { useState } from "react";

import "../styles/drawer.css";

const closeNav = (setOpenSideNav) => {
  setOpenSideNav(false);
};

const openNav = (setOpenSideNav) => {
  setOpenSideNav(true);
};
const Drawer = () => {
  const [openSideNav, setOpenSideNav] = useState(false);
  return (
    <div className="inline">
      <div className={`sidenav ${openSideNav ? "open" : "close"}`}>
        <span className="closebtn" onClick={() => closeNav(setOpenSideNav)}>
          &times;
        </span>
        <a href="#">Home</a>

        <a href="#">News</a>
        <a href="#">Log out</a>
      </div>
      <span
        className={`open-button ${openSideNav ? "close" : "open"}`}
        onClick={() => openNav(setOpenSideNav)}
      >
        &#9776;
      </span>
    </div>
  );
};

export default Drawer;
