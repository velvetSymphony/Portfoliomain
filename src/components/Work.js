import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./styles/Work.css";
import Gameimage from "./images/gamesite.PNG";
import Ecommersiteimage from './images/ecommercesite.PNG';
import Jscalcimage from "./images/jscalcwebsite.PNG";
import Weatherimage from "./images/Weathersite.PNG";
import HighwayAsiaimage from './images/HighwayAsia.PNG';

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
//funtions to open new websites  
  const sendit = (e) => {
    window.open("https://gameslist.netlify.app",  '_blank');
  };
  const sendit2 = (e) => {
    window.open("https://github.com/Abhishekcs96/Games",  '_blank');
  }
  const sendit3 = (e) => {
    window.open("https://acs-weatherapp.netlify.app",  '_blank');
  }
  const sendit4 = (e) => {
    window.open("https://github.com/Abhishekcs96/weather",  '_blank');
  }
  const sendit5 = (e) => {
    window.open("https://acs-ecommerceshop.netlify.app",  '_blank');
  }
  const sendit6 = (e) => {
    window.open("https://github.com/Abhishekcs96/Ecommerce-store",  '_blank');
  }
  const sendit7 = (e) => {
    window.open("https://abhishekcs96.github.io/jscalc/",  '_blank');
  }
  const sendit8 = (e) => {
    window.open("https://github.com/Abhishekcs96/jscalc",  '_blank');
  }
  const sendit9 = (e) => {
    window.open("https://highwayasia.com/",  '_blank');
  }
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
            <img src={Gameimage} alt="1" />
          </div>
          <div className="card-description">
            <h3 className="h3-responsive" id='app-title'>Game-browsing App</h3>
            <p id='app-para'>Interactive and responsive game-browsing list with sort and search functionality. Built using ReactJS, with Redux as the state library and Material UI along with CSS for styling</p>
            <div className="button-containerimp">
            <Button
              variant="outline-light" id="buttonimp" className='btn-sm'
              onClick={(e) => {
                sendit();
              }}
            >
              View Website
            </Button>
            <Button
              variant="outline-light" id="buttonimp" className='btn-sm'
              onClick={(e) => {
                sendit2();
              }}
            >
              View Repo
            </Button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={Weatherimage} alt="1" />
          </div>

          <div className="card-description">
            <h3 className="h3-responsive" id='app-title'>Weather-Application</h3>
            <p id='app-para'>A responsive weather application that displays weather data depending on your search query. Built using ReactJS and styled using vanilla CSS</p>
            <div className="button-containerimp">
            <Button
              variant="outline-light" className='btn-sm'
              onClick={(e) => {
                sendit3();
              }}
            >
              View Website
            </Button>
            <Button
              variant="outline-light" className='btn-sm'
              onClick={(e) => {
                sendit4();
              }}
            >
              View Repo
            </Button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={Jscalcimage} alt="1" />
          </div>

          <div className="card-description">
            <h3 className="h3-responsive" id='app-title'>JavaScript-Calculator</h3>
            <p id='app-para'>An interactive calculator with basic functionality. Built with Vanilla JavaScript and styled using CSS in SCSS(SASS) format.</p>
            <div className="button-containerimp">
            <Button
              variant="outline-light" className='btn-sm'
              onClick={(e) => {
                sendit5();
              }}
            >
              View Website
            </Button>
            <Button
              variant="outline-light" className='btn-sm'
              onClick={(e) => {
                sendit6();
              }}
            >
              View Repo
            </Button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={Ecommersiteimage} alt="1" />
          </div>

          <div className="card-description">
            <h3 className="h3-responsive" id='app-title'>Ecommerce-shopping website</h3>
            <p id='app-para'>A responsive shopping website to browse and select. Build using ReactJS, with Redux as the state library and Semantics UI along with CSS styling</p>
            <div className="button-containerimp">
            <Button
              variant="outline-light" className='btn-sm'
              onClick={(e) => {
                sendit7();
              }}
            >
              View Website
            </Button>
            <Button
              variant="outline-light" className='btn-sm'
              onClick={(e) => {
                sendit8();
              }}
            >
              View Repo
            </Button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={HighwayAsiaimage} alt="1" />
          </div>

          <div className="card-description">
            <h3 className="h3-responsive" id='app-title'>HighwayAsia (Work Project)</h3>
            <p id='app-para'>A blog website under the works using wordpress and styling the UI using custom CSS rules and other potential frameworks</p>
            <div className="button-containerimp">
            <Button
              variant="outline-light" className='btn-sm'
              onClick={(e) => {
                sendit9();
              }}
            >
              View Website (under the works)
            </Button>
            </div>
          </div>
        </div>
      </ReactOwlCarousel>
    </div>
  );
};

export default Work;
