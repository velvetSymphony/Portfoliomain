import React from "react";
import { Link } from "react-scroll";
import { Fade } from "react-reveal";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <Fade duration="3000" triggerOnce={true}>
      <div className="navbar-container">
        <Link
          className="navlinks"
          activeClass="active"
          to="About"
          id='link0imp'
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={200}
        >
          <p id="About-bar">About</p>
        </Link>
        <Link
          className="navlinks"
          activeClass="active"
          id='link1imp'
          to="Portfolio"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={200}
        >
          <p id="Portfolio-bar">Portfolio</p>
        </Link>
        <Link
          className="navlinks"
          activeClass="active"
          to="Contacts"
          id='link2imp'
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={200}
        >
          <p id="Contacts-bar">Contacts</p>
        </Link>
      </div>
    </Fade>
  );
};

export default Navbar;
