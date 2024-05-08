import React, { Component } from 'react'

export class Carousel extends Component {
  render() {
    return (
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./images/1.avif" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="./images/2.webp" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="./images/3.avif" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="./images/4.avif" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="./images/5.avif" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="./images/6.avif" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="./images/7.avif" className="d-block w-100" alt="..."/>
        </div>
      </div>
     <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>

    )
  }
}

export default Carousel
