import React from "react";
import { Link } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./styles/Mobilemenu.css";

const Mobilemenu = () => {
  const [menu, setMenu] = useState(false);
  const menuopen = (e) => {
    e.preventDefault();
    setMenu(!menu);
  };

  const menuclose = () => {
    setMenu(false);
  };
  const handlestatechange = (state) => {
    setMenu(state.isOpen);
  };
 

  return (
    <div className="mobile-navbar">
      <div className="mobile-container">
        
        <Menu
          isOpen={menu}
          onStateChange={(state) => handlestatechange(state)}
          customBurgerIcon={<GiHamburgerMenu />}
        >
            <Link
        className="navlinks"
        activeClass="active"
        to="About"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={0}
        duration={200}
        onClick = {()=>menuclose()}
      >
        <p>About</p>
      </Link>
      <Link
        className="navlinks"
        activeClass="active"
        to="Certifications"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={0}
        duration={200}
        onClick = {()=>menuclose()}
      >
        <p>Certifications</p>
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
        onClick = {()=>menuclose()}
      >
        <p>Projects</p>
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
        onClick = {()=>menuclose()}
      >
        <p>Contact</p>
      </Link>
 <div className="link-style">
      <a className="Links" href="https://github.com/Abhishekcs96" rel="noreferrer" target="_blank">
          <FaGithubSquare />
        </a>

        <a
          className="Links"
          href="https://www.linkedin.com/in/I-am-abhishek-chandra-sekar" rel="noreferrer" target="_blank"
        >
          <FaLinkedin />
        </a>
        </div>
     
        </Menu>
        <customBurgerIcon onClick={() => menuopen()} />
      </div>
    </div>
  );
};

export default Mobilemenu;

