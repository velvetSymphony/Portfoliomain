import React from "react";
import Navbar from "./Navbar";
import "./styles/Header.css";

const Header = () => {

const fixed =  () => {
    let navbarfixed = document.getElementById("impheader");
    console.log(navbarfixed);
    console.log(document.documentElement.scrollTop);

    if (document.documentElement.scrollTop > 549) {
      navbarfixed.style.position = "fixed";
      navbarfixed.style.top = document.body.scrollTop + "px";
      navbarfixed.style.zIndex = 2;
      navbarfixed.style.width = "100%";
    } else if (
      document.documentElement.scrollTop >= 0 &&
      document.documentElement.scrollTop < 550
    ) {
      navbarfixed.style.position = "absolute";
      navbarfixed.style.bottom = 0 + "px";
      navbarfixed.style.zIndex = 2;
      navbarfixed.style.width = "100%";
      navbarfixed.style.top = "unset";
    }
  };
  window.onscroll = function named() {fixed()}

  return (
    <header className="header" id="impheader">
      <Navbar />
    </header>
  );
};

export default Header;
