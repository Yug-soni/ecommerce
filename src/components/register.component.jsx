import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthenticationService from "../services/authentication.service";

const required = value => {
	if (!value) {
		return <div>This field is required!</div>;
	}
};

const verifyEmail = value => {
	if (!isEmail(value)) {
		return <div>This is not a valid email.</div>;
	}
};

const verifyUsername = value => {
	if (value.length < 3 || value.length > 20) {
		return <div>The username must be between 3 and 20 characters.</div>;
	}
};

const verifyPassword = value => {
	if (value.length < 6 || value.length > 40) {
		return <div>The password must be between 6 and 40 characters.</div>;
	}
};

export default class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			email: "",
			password: "",
			successful: false,
			message: "",
		};
	}

	onChangeUsername = e => {
		this.setState({
			username: e.target.value,
		});
	};

	onChangeEmail = e => {
		this.setState({
			email: e.target.value,
		});
	};

	onChangePassword = e => {
		this.setState({
			password: e.target.value,
		});
	};

	handleRegister = e => {
		e.preventDefault();

		this.setState({
			message: "",
			successful: false,
		});

		this.form.validateAll();
		const { username, email, password } = this.state;
		console.log(this.state);

		if (this.checkBtn.context._errors.length === 0) {
			AuthenticationService.register(username, email, password).then(
				response => {
					this.setState({
						message: response.data.message,
						successful: true,
					});
				},
				error => {
					const responseMessage =
						(error.response &&
							error.response.data &&
							error.response.data.message) ||
						error.message ||
						error.toString();

					this.setState({
						successful: false,
						message: responseMessage,
					});
				}
			);
		}
	};

	render() {
		const { username, password, email, successful, message } = this.state;
		return (
			<div>
				<div>
					<img src="//ssl.com/accounts/ui/avatar_2x.png" alt="profile-img" />
					<Form
						onSubmit={this.handleRegister}
						ref={c => {
							this.form = c;
						}}
					>
						{!successful && (
							<div>
								<div>
									<label>Username</label>
									<Input
										type="text"
										name="username"
										value={username}
										onChange={this.onChangeUsername}
										validations={[required, verifyUsername]}
									></Input>
								</div>

								<div>
									<label>Email</label>
									<Input
										type="text"
										name="email"
										value={email}
										onChange={this.onChangeEmail}
										validations={[required, verifyEmail]}
									></Input>
								</div>

								<div>
									<label>Password</label>
									<Input
										type="password"
										name="password"
										value={password}
										onChange={this.onChangePassword}
										validations={[required, verifyPassword]}
									></Input>
								</div>

								<div>
									<button>Sign Up</button>
								</div>
							</div>
						)}

						{message && (
							<div>
								<div>{this.state.message}</div>
							</div>
						)}
						<CheckButton
							ref={c => {
								this.checkBtn = c;
							}}
						/>
					</Form>
				</div>
			</div>
		);
	}
}
