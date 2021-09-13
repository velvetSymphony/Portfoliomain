import React from "react";
import './styles/Whatido.css';
import { Fade } from "react-awesome-reveal";
import Image from './images/Paintbrush.png';
import Image1 from './images/Laptop.png';
import Image2 from './images/Rocket.png';
 
const Whatido = () => {
  return (
    <div>
      <h2 className="whatdo">What I do</h2>
      <div className="outline2"></div>
      <ul className="items">
        <li className="item-1">
        <Fade triggerOnce={true} duration="2000" direction ="right"  damping="0.5">
          <div className="icon-style">
            <img src={Image2} alt='1'></img>
          
          <div className="icon-content">
            <div className="icon-title">Design!</div>
            <div className="icon-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, deserunt.</div>
          </div>
          </div>
          </Fade>
        </li>
        <li className="item-1">
        <Fade triggerOnce={true} duration="2000" direction ="left"  damping="0.5">
          <div className="icon-style">
          <img src={Image1} alt='1'></img>
          <div className="icon-content">
            <div className="icon-title">Develop!</div>
            <div className="icon-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, harum!</div>
            </div>
          </div>
         
          </Fade>
        </li>
        <li className="item-1">
        <Fade triggerOnce={true} duration="2000" direction ="right"  damping="0.5">
          <div className="icon-style">
          <img src={Image} alt='1'></img>
          
          <div className="icon-content">
            <div className="icon-title">Build and Deploy!</div>
            <div className="icon-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, maxime.</div>
          </div>
          </div>
          </Fade>
        </li>
      </ul>
    </div>
  );
};

export default Whatido;
