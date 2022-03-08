import React from "react";
import "./styles/Whatido.css";
import { Fade } from "react-reveal";
import CCNA from "./images/ccna.png";
import AWS from "./images/aws-certified-solutions-architect-associate.png";
import Cert1 from "./images/CERTIFICATE_LANDING_PAGE_GLLCYQLF8SR4.jpg";

const Whatido = () => {
  return (
    <div className="Main-container">
      <h3 className="whatdo">My Certifications</h3>
      <div className="outline2"></div>
      <ul className="items">
        <Fade left triggerOnce={true} duration={1800}>
          <li className="item-1">
            <div className="icon-style">
              <img
                src={CCNA}
                alt="Cisco Certified Network Associate"
                id="image-center"
              ></img>

              <div className="icon-content">
                <div className="icon-title">CCNA</div>
                
                  <a
                    className="icon-text"
                    href="https://www.credly.com/badges/80b37738-5cdb-466b-894c-cc62de7a3b5c/public_url"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    My CCNA certification.
                  </a>
                
              </div>
            </div>
          </li>

          <li className="item-1">
            <div className="icon-style">
              <img
                src={AWS}
                alt="AWS Cerified Solutions Architect-Associate"
                id="image-center"
              ></img>

              <div className="icon-content">
                <div className="icon-title">AWS SAA-C02</div>
                
                  <a
                    className="icon-text"
                    href="https://www.credly.com/badges/449f21be-fa89-4291-b641-abbd8f070611/public_url"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    My AWS SAA certification.
                  </a>
                
              </div>
            </div>
          </li>

          <li className="item-1">
          <div className="icon-title1">Certificates</div>
          <div className="outline2"></div>
            <div className="icon-style1">
              <img
                src={Cert1}
                alt="Coursera Certificates"
                id="image-center"
              ></img>

              <div className="icon-content">
                
                
                <a
                  className="icon-text1"
                  href="https://coursera.org/share/6b68c5401bf6dcf410b1117258838e19"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Interactivity with Javascript
                </a>
                <a
                  className="icon-text1"
                  href="https://coursera.org/share/3976a2b56deb70c72b588256ed7b5f8d"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Introduction to CSS3
                </a>
                <a
                  className="icon-text1"
                  href="https://coursera.org/share/9d1c1761e92908eaf88de3db466e149a"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Advanced Styling with Responsive Design
                </a>
                <a
                  className="icon-text1"
                  href="https://coursera.org/share/9c8d8eb0f51160f7b82f0720dea7b0e7"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Introduction to HTML5
                </a>
                
              </div>
            </div>
          </li>

          
        </Fade>
      </ul>
     

    </div>
  );
};

export default Whatido;
