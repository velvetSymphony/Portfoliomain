import React from "react";
import Navbar from "./Navbar";
import {animateScroll as scroll} from 'react-scroll'
import {FaArrowAltCircleUp} from 'react-icons/fa'
import "./styles/Header.css";

const Header = () => {

  //calculate when to attach scrollbar to top, responsive and set height of navbar responsively too
const fixed =  () => {
    let navbarfixed = document.getElementById("impheader");
    let fixednumber = (document.documentElement.clientHeight);
    let navbarheight = fixednumber - (12*(fixednumber)/100)

    if (document.documentElement.scrollTop > navbarheight) {
      navbarfixed.style.position = "fixed";
      navbarfixed.style.top = document.body.scrollTop + "px";
      navbarfixed.style.zIndex = 2;
      navbarfixed.style.width = "100%";
      navbarfixed.style.height = "8.34vh";
      navbarfixed.style.overflowY ="hidden";
    } else if (
      document.documentElement.scrollTop >= 0 &&
      document.documentElement.scrollTop < navbarheight
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
      <FaArrowAltCircleUp id="scrolltohome" onClick ={() => scroll.scrollToTop()}/>
    </header>
  );
};

export default Header;
