import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5">About Pizza</h1>

        <div className="row h-auto">
          <div className="col-md-6">
            <img
              src="./images/about.avif"
              className="d-block w-100 h-75"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <p>
              Welcome to Pizzamania, where passion for quality meets culinary
              artistry! At our pizzeria, we believe that every pizza should be a
              masterpiece, crafted with the finest ingredients and a dash of
              love. <br /> From the rich, savory tomato sauce to the perfectly
              melted cheese, each bite is a testament to our dedication to
              perfection. Whether you're a fan of classic Margherita, crave the
              zing of a Pepperoni, or desire a veggie-loaded delight, our
              diverse menu has something to tantalize every palate. <br /> We
              source our ingredients locally and sustainably, ensuring that
              every pizza is not only delicious but also a choice for our
              community. <br /> Join us for a slice of happiness, and let us
              make your pizza experience truly extraordinary. Thank you for
              being a part of our story!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
