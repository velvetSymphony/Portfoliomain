import React from "react";
import { Fade, Flip } from "react-reveal";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaUbuntu } from "react-icons/fa";
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
            I&apos;m a Master&apos;s graduate from the University of New South Wales,
            Australia. A bit after graduation, I became interested in learning
            more about coding and front end dev technologies such as reactJS to
            broaden my horizons. Took my learning through the hands on route,
            making projects and finally, developing this website. Around the end
            of 2021, I had also set my sights on the CCNA and AWS SAA-C02
            certifications to further my skillset across the networking and
            cloud realms. Admittedly, my indecisiveness ended up making me take
            a year off to study and build projects(partly due to COVID
            disruption as well) but after much deliberation to see where my
            interests were truly aligned, I decided seeking the cloud path with
            a strongsuit in networking and some developer knowledge. And here I
            am now, seeking opportunities in the field of cloud and devops!
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
                <FaReact size={55} />
                <p id="skill-desc">React</p>
              </div>
              <div className="skill">
                <FaPython size={55} />
                <p id="skill-desc">Python</p>
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
                <p id="skill-desc">Docker basics</p>
              </div>
              <div className="skill">
                <FaUbuntu size={55} />
                <p id="skill-desc">Ubuntu Linux</p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="info-container">
          <p id="me-info">
            I have a good foundational network background through my master&apos;s
            studies and clearing my CCNA. Projects during my master&apos;s were
            implemented using python and afterwards, I learnt javascript out of
            interest. All my self-implemented projects were made using
            javascript and react. I have worked on a basic level with Linux via
            oracle virtualbox (mainly using Ubuntu). I&apos;m familiar with version
            control tools such as Git, experimented with Docker and use Gitlab
            as my primary tool for CI and CD. I have a strong footing in AWS,
            having used it&apos;s services for hands-on lab practices and demos to
            prepare for my exam. I am currently learning to implement
            Infrastructure as code (IaC) through AWS (and possibly terraform) to
            better my understanding of cloud and devops tools and deploy my
            personal resources in the cloud.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
