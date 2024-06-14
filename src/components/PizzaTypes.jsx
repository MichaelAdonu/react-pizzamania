import React, { Component } from "react";
import Item from "./Item";

export class PizzaTypes extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Pizza Types</h3>
        <div className="row">
          <Item
            imgSrc="./images/cheezy.avif"
            title="Cheezy Pizza"
            text="Sometimes all you want at the end of the day is a simple cheese pizza. This recipe turns simple into sublime with the addition of an exceptional pizza dough, low-moisture mozzarella cheese, and an easy to make tomato sauce that hits all of the right sweet and savory notes to marry all of the flavors in this pie. A simple garnish of fresh herbs, and you've got perfection on a plate."
          />
          <Item
            imgSrc="./images/family.avif"
            title="Family Pizza"
            text="From our hand-stretched dough, made fresh daily, to our rich, tangy tomato sauce and premium mozzarella cheese, every component of our Family Pizza is crafted with care and passion. We strive to create a meal that's as wholesome as it is delicious. So gather your loved ones and create lasting memories with our Family Pizza, where every slice is made with love and shared with joy."
          />
          <Item
            imgSrc="./images/peperoni.avif"
            title="Peperoni Pizza"
            text="Our Pepperoni Pizza isn’t just about the pepperoni; it’s about the harmonious balance of flavors. The edges of the pepperoni curl and crisp as they bake, creating little pockets of flavor that are sure to delight your taste buds. Whether you’re enjoying a cozy night in, or simply craving a reliable, delicious meal, our Pepperoni Pizza promises a satisfying and mouthwatering experience every time."
          />
          <Item
            imgSrc="./images/./about.avif"
            title="Vegetable Pizza"
            text="Our Vegetable Pizza is generously topped with an assortment of fresh, crisp vegetables that are sourced locally. Enjoy the sweet and savory blend of bell peppers, the juicy ripeness of tomatoes, the earthy goodness of mushrooms. Whether you’re a vegetarian or simply a fan of fresh, nutritious ingredients, our Vegetable Pizza is a vibrant, delicious choice that’s sure to please."
          />
        </div>
      </div>
    );
  }
}

export default PizzaTypes;
