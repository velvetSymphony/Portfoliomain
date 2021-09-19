import React from "react";
import { Fade, Flip } from 'react-reveal';
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { DiSass } from "react-icons/di";
import {FaBootstrap} from 'react-icons/fa';
import { FaNode } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import './styles/About.css';

const About = () => {
  return (
    <div className="box-container" id="About">
      <div className="content-container">
        <Flip top cascade duration={500} triggeronce={true}>
          <h1 className="About">About Myself</h1>
          <div className="outline1"></div>
        </Flip>
        <div className="info-container">
          <h3 id="name">Abhishek Chandra sekar</h3>
          <h5 id="degree">Freelance Developer</h5>
          <h5 id="degree">M.E.Sc Telecommunications, UNSW Australia, (2018-2020 Sept).</h5>
          <p id='me-info'>
           I am a graduate from the University of New South Wales, Australia. I'm commited to constantly improving my skillset and I pride myself on dilligent work. Working with ReactJS currently, I made the transition to coding and front-end development during the time of my graduation and I am now completely involved in the development sphere. My projects involve using ReactJS as my go-to framework along with using Hooks, multiple React libraries, Redux and working with API's. I also tend to style my projects with vanilla CSS using SASS as my preferred pre-processor along with using some responsive libraries and frameworks such as Bootstrap, Material-UI and Semantic UI.
          </p>
        </div>
        
          <div className="skills-container">
          <Fade right  triggerOnce={true} duration={2000}>
            <h2>My Skills</h2>
            <div className="skills-cover1">
            <div className="skill">
              <AiFillHtml5 size={55} />
              <p id='skill-desc'>HTML</p>
            </div>
            <div className="skill">
              <DiCss3 size={55} />
              <p id='skill-desc'>CSS3</p>
            </div>
            <div className="skill">
              <DiJavascript1 size={55} />
              <p id='skill-desc'>JavaScript</p>
            </div>
            <div className="skill">
              <DiSass size={55} />
              <p id='skill-desc'>Sass</p>
            </div>
           
            
            <div className="skill">
              <FaReact size={55} />
              <p id='skill-desc'>React</p>
            </div>
            <div className="skill">
              <SiRedux size={55} />
              <p id='skill-desc'>Redux</p>
            </div>
            <div className="skill">
              <FaBootstrap size={55} />
              <p id='skill-desc'>Bootstrap</p>
            </div>
            <div className="skill">
              <FaNode size={55} />
              <p id='skill-desc'>NodeJS</p>
            </div>
           </div>
            </Fade>
          </div>
        
      </div>
    </div>
  );
};

export default About;
