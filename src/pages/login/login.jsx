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
		const { username, password } = this.state.data;
		axios
			.get("http://localhost:8080/login", {
				method: "POST",
				body: JSON.stringify({ username, password }),
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then(response => console.log(response, "Response"))
			.catch(error => {
				console.log(error, "error");
			});
		axios
			.get("http://localhost:8080/logout")
			.then(response => console.log(response))
			.catch(error => console.log(error));

		// fetch("http://localhost:8080/login", {
		// 	method: "POST",
		// 	// body: new URLSearchParams(),
		// 	credentials: "include",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// })
		// 	.then(res => console.log(res.headers.get("set-cookie")))

		// 	.catch(error => console.log(error));
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
