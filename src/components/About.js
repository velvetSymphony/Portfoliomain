import React from "react";
import { Fade, Flip } from "react-reveal";
import { DiJavascript1 } from "react-icons/di";
import { SiTerraform } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FiGitlab } from "react-icons/fi";
import "./styles/About.css";

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
          <h5 id="degree">
            M.E.Sc Telecommunications, UNSW Australia, (2018-2020 Sept)
          </h5>
          <h5 id="degree">A little bit about myself</h5>
          <p id="me-info">
            I&apos;m a Master&apos;s graduate from the University of New South
            Wales, Australia. A bit after graduation, I became interested in
            learning more about coding and front end dev technologies such as
            reactJS. Took my learning through the hands on route, making
            projects and finally, developing this website (only the front-end
            part of it). Around the mid-end of 2021, I had also set my sights on the
            CCNA and AWS SAA-C02 certifications to further my skillset across
            the networking and cloud fields in an attempt to explore the topics
            further in depth and also further develop this website by developing
            the backend and maintaining the infrastucture as well. I ended up
            taking about a year and a half off since graduation to accomplish
            all of the above and after all the time and now seeking a future in the area of
            IT(networks, cloud and devops), to which I am currently open to opportunities in.
          </p>
        </div>

        <div className="skills-container">
          <Fade right triggerOnce={true} duration={2000}>
            <h2>My Programming and IT Skills</h2>
            <div className="skills-cover1">
              <div className="skill">
                <DiJavascript1 size={55} />
                <p id="skill-desc">JavaScript</p>
              </div>
              <div className="skill">
                <FaPython size={55} />
                <p id="skill-desc">Python</p>
              </div>
              <div className="skill">
                <SiTerraform size={55} />
                <p id="skill-desc">Terraform</p>
              </div>
              <div className="skill">
                <FaGitAlt size={55} />
                <p id="skill-desc">Git</p>
              </div>
              <div className="skill">
                <FiGitlab size={55} />
                <p id="skill-desc">GitLab</p>
              </div>
              <div className="skill">
                <FaAws size={55} />
                <p id="skill-desc">AWS</p>
              </div>
              <div className="skill">
                <FaDocker size={55} />
                <p id="skill-desc">Docker</p>
              </div>
              <div className="skill">
                <FaLinux size={55} />
                <p id="skill-desc">Linux</p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="info-container">
          <p id="me-info">
            I have a good foundational network background through my previous internship, 
            master&apos;s studies and I have worked on a basic level with
            Linux via oracle virtualbox (mainly using CentOS). Clearing my CCNA further improved my networking and IT knowledge. 
            Projects during my master&apos;s were implemented using python and afterwards, I learnt
            javascript out of interest. All my self-implemented projects were
            made using javascript and react. I&apos;m familiar
            with version control tools such as Git, experimented with Docker and
            use Gitlab as my primary tool for CI and CD. I have a good level of
            familiarity with AWS, having used it&apos;s services to develop my
            website and prepare for my exam. I am currently learning to
            implement Infrastructure as code (IaC) using the AWS SAM framework
            and Terraform to better my understanding of IaC tools, ultimately
            gaining more exposure with the toolset employed to empower devops
            life cycles and using that knowledge to help automate and deploy my
            personal resources to the cloud. Currently, this website is hosted
            on AWS and the project&apos;s write-up can be read{" "}
            <a
              id="writeup-link"
              href="https://abhishekcs96.github.io"
              target={"blank"}
              referrerPolicy="no_refferer"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
