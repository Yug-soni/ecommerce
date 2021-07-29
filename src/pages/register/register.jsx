import React, { Component } from "react";

import "./register.css";

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {
				firstName: "",
				lastName: "",
				email: "",
				password: "",
			},
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
		console.log(this.state);
		this.registerUser();
	};

	registerUser = () => {
		const url = "http://localhost:8080/api/v1/registration";
		const { data } = this.state;
		const init = {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			redirect: "follow",
			referrerPolicy: "no-referrer",
			body: JSON.stringify(data),
		};
		fetch(url, init)
			.then(response => {
				console.log(
					"🚀 ~ file: App.js ~ line 12 ~ App ~ componentDidMount ~ response",
					response
				);
			})
			.catch(error => {
				console.log("🚀 ~ file: App.js ~ line 17 ~ App ~ fetch ~ error", error);
			});
	};

	render() {
		return (
			<div className="register-page-form-wrapper">
				<form onSubmit={this.handleSubmit} className="register-page-form">
					<div className="register-page-h1-wrapper">
						<h1 className="register-page-h1">Register</h1>
					</div>

					<div className="register-page-inputs-wrapper">
						<div className="register-page-input-wrapper">
							<span className="register-page-span">First Name</span>
							<input
								className="register-page-input"
								type="text"
								placeholder="first name"
								name="firstName"
								onChange={this.handleChange}
								required
							/>
						</div>
						<div className="register-page-input-wrapper">
							<span className="register-page-span">Last Name</span>
							<input
								className="register-page-input"
								type="text"
								placeholder="last name"
								name="lastName"
								onChange={this.handleChange}
								required
							/>
						</div>
						<div className="register-page-input-wrapper">
							<span className="register-page-span">Email</span>
							<input
								className="register-page-input"
								type="text"
								placeholder="email"
								name="email"
								onChange={this.handleChange}
								required
							/>
						</div>
						<div className="register-page-input-wrapper">
							<span className="register-page-span">Password</span>
							<input
								className="register-page-input"
								type="password"
								placeholder="password"
								name="password"
								onChange={this.handleChange}
								required
							/>
						</div>
						<div className="register-page-button-wrapper">
							<button type="submit" className="register-page-button">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Register;
