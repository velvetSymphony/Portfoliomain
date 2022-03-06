import React from "react";
import { Fade, Flip } from 'react-reveal';
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { DiSass } from "react-icons/di";
import {FaBootstrap} from 'react-icons/fa';
import { FaPython } from "react-icons/fa";
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
          <h5 id="degree">M.E.Sc Telecommunications, UNSW Australia, (2018-2020 Sept)</h5>
          <h5 id="degree">A little bit about myself</h5>
          <p id='me-info'>
           I'm a Master's graduate from the University of New South Wales, Australia. A bit after graduation, I became interested in learning more about coding and front end dev technologies such as reactJS to broaden my horizons. Took my learning through the hands on route, making projects and finally, developing this website. Around the end of 2021, I had also set my sights on the CCNA and AWS SAA-C02 certifications to further my skillset across the networking and cloud realms. Admittedly, my indecisiveness ended up making me take a year off to study and build projects(partly due to COVID disrupting my visa processing as well) but after much deliberation to see where my interests were truly aligned, I decided seeking the cloud path with a strongsuit in networking and some developer knowledge. And here I am now, seeking opportunities in the field of cloud and networking!
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
              <FaPython size={55} />
              <p id='skill-desc'>Python</p>
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
              <DiSass size={55} />
              <p id='skill-desc'>Sass</p>
            </div>
            <div className="skill">
              <FaBootstrap size={55} />
              <p id='skill-desc'>Bootstrap</p>
            </div>           
           </div>
            </Fade>
          </div>
        
      </div>
    </div>
  );
};

export default About;
