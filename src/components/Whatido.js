import React from "react";
import './styles/Whatido.css';
import { Fade } from "react-reveal";
import Image from './images/Paintbrush.png';
import Image1 from './images/Laptop.png';
import Image2 from './images/Rocket.png';
 
const Whatido = () => {
  return (
    <div className="Main-container">
      <h3 className="whatdo">My Project Approach</h3>
      <div className="outline2"></div>
      <ul className="items">
        <li className="item-1">
        <Fade right triggerOnce={true} duration={2000}>
          <div className="icon-style">
            <img src={Image} alt='paintbrush' id='image-center'></img>
          
          <div className="icon-content">
            <div className="icon-title">Design</div>
            <div className="icon-text">Style and mark-up your website based on your needs, giving it a unique feel and experience.</div>
          </div>
          </div>
          </Fade>
        </li>
        <li className="item-1">
        <Fade left triggerOnce={true} duration={2000}>
          <div className="icon-style">
          <img src={Image1} alt='Laptop' id='image-center'></img>
          <div className="icon-content">
            <div className="icon-title">Develop</div>
            <div className="icon-text">Develop your website, application and work with the core functionality and design approach based on your design.</div>
            </div>
          </div>
         
          </Fade>
        </li>
        <li className="item-1">
        <Fade right triggerOnce={true} duration={2000} >
          <div className="icon-style">
          <img src={Image2} alt='Rocket' id='image-center'></img>
          
          <div className="icon-content">
            <div className="icon-title">Build and Deploy</div>
            <div className="icon-text">Build and Deploy the website online for the world to see. Test out performance and make tweaks and adjustments where neccesary.</div>
          </div>
          </div>
          </Fade>
        </li>
      </ul>
    </div>
  );
};

export default Whatido;
