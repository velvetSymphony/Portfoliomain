import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Zoom, Fade } from "react-reveal";
import "./styles/Home.css";

const Home = () => {
  return (
    <div className="home-background">
      <div className="space-top">
        <Fade
          right
          opposite
          cascade
          triggerOnce={true}
          delay={500}
          duration={900}
        >
          <h1 className="head1">Hello there!</h1>
        </Fade>
        <Fade
          left
          opposite
          cascade
          triggerOnce={true}
          delay={2500}
          duration={900}
        >
          <h3 className="head3">My name is Abhishek</h3>
        </Fade>
        <Zoom
          left
          opposite
          cascade
          triggerOnce={true}
          delay={3700}
          duration={1500}
        >
          <p className="para1">Welcome to my portfolio</p>
        </Zoom>
        <div className="link-wrap">
          <a
            className="Links"
            href="https://github.com/Abhishekcs96"
            target="_blank"
            rel="noreferrer"
          >
            <Fade top cascade delay={5000}>
              <FaGithubSquare />
            </Fade>
          </a>
          <a
            className="Links"
            href="https://www.linkedin.com/in/abhishek-chandra-sekar-4018a8137/"
            target="_blank"
            rel="noreferrer"
          >
            <Fade top cascade delay={5000}>
              <FaLinkedin />
            </Fade>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
