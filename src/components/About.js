import React from "react";
import { Fade, Flip } from 'react-reveal';
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { DiSass } from "react-icons/di";
import {FaBootstrap} from 'react-icons/fa';
import { FaNode } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
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
          <h5 id="name">Abhishek Chandra-sekar</h5>
          <h5 id="degree">2018-2020 M.E.Sc Telecommunications, UNSW Australia</h5>
          <p id='me-info'>
            My master’s degree was a specialisation in the field of
            telecommunications and computer networks. Since my graduation, I
            have transitioned to a more code-centric expertise after being
            exposed to javascript during my final days of university. Currently
            based in Sydney, I am a freelance developer with my first
            opportunity to work in designing a personalised, wordpress website
            for a client
          </p>
        </div>
        
          <div className="skills-container">
          <Fade right  triggerOnce={true} duration={2000}>
            <h2>My Skills</h2>
            <div className="skills-cover1">
            <div className="skill">
              <AiFillHtml5 size={55} />
              <p>HTML</p>
            </div>
            <div className="skill">
              <DiCss3 size={55} />
              <p>CSS3</p>
            </div>
            <div className="skill">
              <DiJavascript1 size={55} />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <DiSass size={55} />
              <p>Sass</p>
            </div>
            </div>
            <div className="skills-cover2">
            <div className="skill">
              <FaReact size={55} />
              <p>React</p>
            </div>
            <div className="skill">
              <FaBootstrap size={55} />
              <p>Bootstrap</p>
            </div>
            <div className="skill">
              <SiCplusplus size={55} />
              <p>C++</p>
            </div>
            <div className="skill">
              <FaNode size={55} />
              <p>NodeJS</p>
            </div>
            </div>
            </Fade>
          </div>
        
      </div>
    </div>
  );
};

export default About;
