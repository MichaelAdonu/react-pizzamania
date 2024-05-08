import React, { Component } from "react";

export class Carousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/1.avif" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/2.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/3.avif" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/4.avif" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/5.avif" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/6.avif" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/7.avif" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleControls"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#carouselExampleControls"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    );
  }
}

export default Carousel;
