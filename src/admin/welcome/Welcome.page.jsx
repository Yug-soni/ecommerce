import React, { Component } from "react";

import "./Welcome.styles.css";

import Card from "../../components/card/Card.component";

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        {
          id: 1,
          displayHeading: "Login|Register",
          link: "login",
        },
        {
          id: 2,
          displayHeading: "Product Management",
          link: "product-m",
        },
        {
          id: 3,
          displayHeading: "Category Management",
          link: "category-m",
        },
        {
          id: 4,
          displayHeading: "Product View",
          link: "product-v",
        },
      ],
    };
  }

  render() {
    const { options } = this.state;
    return (
      <div className="admin-user-welcome-page">
        <div className="option-container">
          {options.map(({ id, ...others }) => (
            <Card key={id} {...others} {...this.props} />
          ))}
        </div>
      </div>
    );
  }
}

export default Welcome;
