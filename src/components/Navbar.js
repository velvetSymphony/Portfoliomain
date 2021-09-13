import React from "react";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <Fade duration="3000" triggerOnce={true}>
      <div className="navbar-container">
        <Link
          className="navlinks"
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={200}
          
          
        >
          <p>About</p>
        </Link>
        <Link
          className="navlinks"
          activeClass="active"
          to="Portfolio"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={200}
          
        >
          <p>Portfolio</p>
        </Link>
        <Link
          className="navlinks"
          activeClass="active"
          to="Contacts"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={200}
          
        >
          <p>Contacts</p>
        </Link>
      
      </div>
    </Fade>
  );
};

export default Navbar;
