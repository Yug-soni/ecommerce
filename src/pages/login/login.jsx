import axios from "axios";
import React from "react";

import "./login.css";

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {
				username: "",
				password: "",
			},
			error: null,
		};
	}

	handleChange = event => {
		const { data } = this.state;
		const target = event.target;
		const name = target.name;
		const value = target.value;
		this.setState(
			{
				data: {
					...data,
					[name]: value,
				},
			},
			() => {}
		);
	};

	handleSubmit = event => {
		event.preventDefault();
		// console.log(this.state);
		this.loginUser();
	};

	loginUser = () => {
		/*
      TODO: send a request to login the user
      and redirect the user to homepage 
      and manage the session of the user
    */
		const { username, password } = this.state.data;
		axios
			.post("http://localhost:8080/login", { username, password })
			.then(response => console.log(response))
			// .then(data => console.log(data))
			.catch(error => console.log(error));
		axios
			.get("http://localhost:8080/logout")
			.then(response => console.log(response))
			.catch(error => console.log(error));
	};

	render() {
		return (
			<div className="login-page-form-wrapper">
				<form onSubmit={this.handleSubmit} className="login-page-form">
					<div className="login-page-h1-wrapper">
						<h1 className="login-page-h1">Login</h1>
					</div>
					<div className="login-page-inputs-wrapper">
						<div className="login-page-input-wrapper">
							<span className="login-page-span">Email</span>
							<input
								className="login-page-input"
								type="text"
								placeholder="email"
								name="username"
								onChange={this.handleChange}
								required
							/>
						</div>
						<div className="login-page-input-wrapper">
							<span className="login-page-span">Password</span>
							<input
								className="login-page-input"
								type="password"
								placeholder="password"
								name="password"
								onChange={this.handleChange}
								required
							/>
						</div>
						<div className="login-page-button-wrapper">
							<button type="submit" className="login-page-button">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
