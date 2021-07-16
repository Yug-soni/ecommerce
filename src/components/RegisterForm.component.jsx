import React from "react";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleFormSubmit = () => {
    console.log("Handling form registration submission");
  };

  render() {
    return (
      <div className="register-form">
        <input type="email" required></input>
        <input type="password" required></input>
        <button onClick={() => this.handleFormSubmit()}>Register</button>
      </div>
    );
  }
}

export default RegisterForm;
