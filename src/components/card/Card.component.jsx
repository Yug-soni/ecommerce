import React from "react";

import { Redirect } from "react-router-dom";

import "./Card.styles.css";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      link: "",
      displayHeading: "",
    };
  }

  componentDidMount() {
    this.setState(
      (prevState, prevProps) => {
        return {
          displayHeading: prevProps.displayHeading,
          link: prevProps.link,
        };
      },
      () => {
        // console.log(this.state);
      }
    );
  }

  redirectMe = () => {
    this.setState(() => ({
      redirect: true,
    }));
  };

  render() {
    const { displayHeading, link, redirect } = this.state;
    if (redirect) {
      return <Redirect to={link} />;
    }
    return (
      <div className="card-option" onClick={this.redirectMe}>
        <div className="card-heading">{displayHeading}</div>
      </div>
    );
  }
}

export default Card;
