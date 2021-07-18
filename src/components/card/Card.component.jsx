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
      special: "",
    };
  }

  componentDidMount() {
    this.setState(
      (prevState, prevProps) => {
        return {
          displayHeading: prevProps.displayHeading,
          link: prevProps.link,
          special: prevProps.special,
        };
      },
      () => {
        // console.log(this.props);
      }
    );
  }

  redirectMe = () => {
    this.setState(() => ({
      redirect: true,
    }));
  };

  render() {
    const { displayHeading, link, special, redirect } = this.state;
    const { isLoggedIn } = this.props;
    if (redirect) {
      return <Redirect to={`${special}/${isLoggedIn ? link : "login"}`} />;
    }
    return (
      <div className="card-option" onClick={this.redirectMe}>
        <div className="card-heading">{displayHeading}</div>
      </div>
    );
  }
}

export default Card;
