import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./styles/Work.css";
import Image from "./images/Garden-Of-Eden.png";

const Work = () => {
  const resp = {
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: true,
        loop: false,
      },
    },
  };
  const sendit = (e) => {
    window.location.href = "https://abhishekcs96-weatherapp.netlify.app/";
  };
  return (
    
    <div className="carousel-info">
      <ReactOwlCarousel
        className="owl-theme"
        items="1"
        autoplay={false}
        dots={true}
        responsiveClass="true"
        responsive={resp}
        lazyLoad={true}
        animateIn={true}
        animateOut={true}
      >
        <div className="card">
          <div className="card-image">
            <img src={Image} alt="1" />
          </div>
          <div className="card-description">
            <h3 className="h3-responsive" id='app-title'>Weather</h3>
            <p id='app-para'>Display weather data</p>
            <Button
              variant="outline-light" id="buttonimp"
              onClick={(e) => {
                sendit();
              }}
            >
              View Website
            </Button>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={Image} alt="1" />
          </div>

          <div className="card-description">
            <h3 className="h3-responsive" id='app-title'>Weather</h3>
            <p id='app-para'>Display weather data</p>
            <Button
              variant="outline-light"
              onClick={(e) => {
                sendit();
              }}
            >
              View Website
            </Button>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={Image} alt="1" />
          </div>

          <div className="card-description">
            <h3 className="h3-responsive" id='app-title'>Weather</h3>
            <p id='app-para'>Display weather data</p>
            <Button
              variant="outline-light" className='btn-sm'
              onClick={(e) => {
                sendit();
              }}
            >
              View Website
            </Button>
          </div>
        </div>
      </ReactOwlCarousel>
    </div>
  );
};

export default Work;
