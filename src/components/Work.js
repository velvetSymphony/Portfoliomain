import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./styles/Work.css";
import Gameimage from "./images/gamesite.PNG";
import Jscalcimage from "./images/jscalcwebsite.PNG";
import Weatherimage from "./images/Weathersite.PNG";
import Portfolioimage from "./images/portfolio.PNG";

const Work = () => {
  //functions to open new websites
  const sendit = () => {
    window.open("https://gameslist.netlify.app", "_blank");
  };
  const sendit2 = () => {
    window.open("https://github.com/Abhishekcs96/Games", "_blank");
  };
  const sendit3 = () => {
    window.open("https://acs-weatherapp.netlify.app", "_blank");
  };
  const sendit4 = () => {
    window.open("https://github.com/Abhishekcs96/weather", "_blank");
  };
  const sendit7 = () => {
    window.open("https://abhishekcs96.github.io/jscalc/", "_blank");
  };
  const sendit8 = () => {
    window.open("https://github.com/Abhishekcs96/jscalc", "_blank");
  };
  const sendit9 = () => {
    window.open("https://gitlab.com/Abhishekcs96/Portfoliomain", "_blank");
  };
  const sendit10 = () => {
    window.open("https://github.com/Abhishekcs96/Portfoliomain", "_blank");
  };
  const sendit11 = () => {
    window.open("https://github.com/Abhishekcs96/Serverless_Backend", "_blank");
  };
  return (
    <div className="carousel-info">
      <Carousel>
        <Carousel.Item>
          <div className="card">
            <div className="card-image">
              <img
                src={Portfolioimage}
                alt="Portfolio"
                id="carousel-images"
                className="d-block w-100"
              />
            </div>
            <div className="card-description">
              <h3 className="h3-responsive" id="app-title">
                Portfolio Website
              </h3>
              <p id="app-para">
                My website hosted on AWS. Automated development lifecycle using
                various devops tools.
              </p>
              <div className="button-containerimp">
                <Button
                  variant="outline-light"
                  id="buttonimp"
                  className="btn-sm"
                  onClick={() => {
                    sendit10();
                  }}
                >
                  View Blog
                </Button>
                <Button
                  variant="outline-light"
                  id="buttonimp"
                  className="btn-sm"
                  onClick={() => {
                    sendit9();
                  }}
                >
                  Frontend
                </Button>
                <Button
                  variant="outline-light"
                  id="buttonimp"
                  className="btn-sm"
                  onClick={() => {
                    sendit11();
                  }}
                >
                  Backend
                </Button>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="card">
            <div className="card-image">
              <img
                src={Gameimage}
                alt="Game"
                id="carousel-images"
                className="d-block w-100"
              />
            </div>
            <div className="card-description">
              <h3 className="h3-responsive" id="app-title">
                Game-browsing App
              </h3>
              <p id="app-para">
                Interactive game-browsing list with sort and search
                functionality.
              </p>
              <div className="button-containerimp">
                <Button
                  variant="outline-light"
                  id="buttonimp"
                  className="btn-sm"
                  onClick={() => {
                    sendit();
                  }}
                >
                  View Website
                </Button>
                <Button
                  variant="outline-light"
                  id="buttonimp"
                  className="btn-sm"
                  onClick={() => {
                    sendit2();
                  }}
                >
                  View Repo
                </Button>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="card">
            <div className="card-image">
              <img
                src={Weatherimage}
                alt="Weather"
                id="carousel-images"
                className="d-block w-100"
              />
            </div>

            <div className="card-description">
              <h3 className="h3-responsive" id="app-title">
                Weather-Application
              </h3>
              <p id="app-para">
                A weather application that displays weather data.
              </p>
              <div className="button-containerimp">
                <Button
                  variant="outline-light"
                  className="btn-sm"
                  onClick={() => {
                    sendit3();
                  }}
                >
                  View Website
                </Button>
                <Button
                  variant="outline-light"
                  className="btn-sm"
                  onClick={() => {
                    sendit4();
                  }}
                >
                  View Repo
                </Button>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="card">
            <div className="card-image">
              <img
                src={Jscalcimage}
                alt="Jscalc"
                id="carousel-images"
                className="d-block w-100"
              />
            </div>

            <div className="card-description">
              <h3 className="h3-responsive" id="app-title">
                JavaScript-Calculator
              </h3>
              <p id="app-para">
                An interactive calculator with basic functionality. Built with
                Vanilla JavaScript.
              </p>
              <div className="button-containerimp">
                <Button
                  variant="outline-light"
                  className="btn-sm"
                  onClick={() => {
                    sendit7();
                  }}
                >
                  View Website
                </Button>
                <Button
                  variant="outline-light"
                  className="btn-sm"
                  onClick={() => {
                    sendit8();
                  }}
                >
                  View Repo
                </Button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Work;
