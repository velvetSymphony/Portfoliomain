import React from "react";
import Work from "./Work";
import "./styles/CarouselPortfolio.css";

const CarouselPortfolio = () => {
  return (
    <div className="box-container" id="Portfolio">
      <h1 className="h3-responsive">My Portfolio </h1>
      <div className="outline-3"></div>
      <div className="carousel-container">
        <Work />
      </div>
    </div>
  );
};

export default CarouselPortfolio;
