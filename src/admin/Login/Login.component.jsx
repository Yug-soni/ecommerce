import React from "react";

import { Redirect } from "react-router-dom";

import "./Login.styles.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      email: "",
      password: "",
      special: "special",
      error: null,
      redirect: null,
    };
  }

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {}
    );
  };

  handleSubmit = event => {
    this.clearInputFields();
    console.log(this.state);
    this.insertDefaultAdminUser();
    event.preventDefault();
  };

  insertDefaultAdminUser = () => {
    const { special, id, email, password } = this.state;
    fetch(`http://localhost:8080/${special}/insert`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        email: email,
        password: password,
      }),
    })
      // .then(response => (!response.ok ? Promise.reject() : response))
      .then(response => response.json())
      .then(
        data => {
          // console.log(data);
          // alert(`Success`);
          this.setState({
            redirect: true,
          });
        },
        error => {
          this.setState({
            error: error,
          });
          // console.log(error);
          alert(`Error`);
        }
      )
      .catch(error => {
        // console.log("In catch");
        // console.log(error);
      });
  };

  clearInputFields = () => {
    this.setState(
      {
        id: null,
        email: "",
        password: "",
      },
      () => {
        console.log("State cleared.");
      }
    );
  };

  render() {
    const { redirect } = this.state;
    const { special } = this.props;
    if (redirect) {
      return <Redirect to={`/${special}`} />;
    }
    return (
      <form onSubmit={this.handleSubmit} className="login">
        <div className="login-form-heading-container">
          <h1 className="login-form-heading">Login | Register</h1>
        </div>
        <div className="login-form">
          <span className="login-form-span">Email</span>
          <input
            className="login-form-input"
            type="text"
            placeholder="email"
            name="email"
            onChange={this.handleChange}
            required
          />
          <span className="login-form-span">Password</span>
          <input
            className="login-form-input"
            type="password"
            placeholder="password"
            name="password"
            onChange={this.handleChange}
            required
          />
          <button type="submit" className="login-form-button">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Login;
