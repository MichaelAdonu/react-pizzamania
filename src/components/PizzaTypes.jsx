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
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat est voluptatem, perferendis minima nesciunt, modi repellendus dolor eveniet voluptatum quaerat necessitatibus deleniti commodi?  Tenetur impedit, veritatis dolore debitis delectus ratione."
          />
          <Item
            imgSrc="./images/family.avif"
            title="Family Pizza"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat est voluptatem, perferendis minima nesciunt, modi repellendus dolor eveniet voluptatum quaerat necessitatibus deleniti commodi?  Tenetur impedit, veritatis dolore debitis delectus ratione."
          />
          <Item
            imgSrc="./images/peperoni.avif"
            title="Peperoni Pizza"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat est voluptatem, perferendis minima nesciunt, modi repellendus dolor eveniet voluptatum quaerat necessitatibus deleniti commodi?  Tenetur impedit, veritatis dolore debitis delectus ratione."
          />
          <Item
            imgSrc="./images/./about.avif"
            title="Vegetable Pizza"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat est voluptatem, perferendis minima nesciunt, modi repellendus dolor eveniet voluptatum quaerat necessitatibus deleniti commodi?  Tenetur impedit, veritatis dolore debitis delectus ratione."
          />
        </div>
      </div>
    );
  }
}

export default PizzaTypes;
