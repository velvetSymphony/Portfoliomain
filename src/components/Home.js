import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import {Zoom, Fade} from 'react-reveal'
import "./styles/Home.css";


const Home = () => {
  return (
    
    <div className="space-top">
      <Zoom right opposite cascade triggerOnce={true} delay = {500}duration={900}>
      <h1 className="head1">  
        Aspiring Dev full time    
      </h1>
      <h3 className="head3">
          Welcome there!   
      </h3>
      <p className="para1">
          My name is Abhishek and im your guest!
      </p>
      </Zoom >

      <div className="link-wrap">
        <a className="Links" href="https://github.com/Abhishekcs96">
          <Fade top cascade delay ={2000}>
            <FaGithubSquare />
            </Fade>
          
        </a>

        <a
          className="Links"
          href="https://www.linkedin.com/in/abhishek-chandra-sekar-4018a8137/"
        >
          <Fade top cascade delay ={2000}>
          
            <FaLinkedin />
            </Fade>
        </a>
      </div>
      
    </div>
    
  );
};

export default Home;
