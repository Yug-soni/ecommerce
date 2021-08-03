import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthenticationService from "../services/authentication.service";

const required = value => {
	if (!value) {
		return <div>The field is required!</div>;
	}
};

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			loading: false,
			message: "",
		};
	}

	onChangeUsername = e => {
		this.setState({
			username: e.target.value,
		});
	};

	onChangePassword = e => {
		this.setState({
			password: e.target.value,
		});
	};

	handleLogin = e => {
		e.preventDefault();

		this.setState({
			message: "",
			loading: true,
		});

		this.form.validateAll();
		const { username, password } = this.state;
		console.log(username, password);

		if (this.checkBtn.context._errors.length === 0) {
			AuthenticationService.login(username, password).then(
				() => {
					this.props.history.push("/profile");
					window.location.reload();
				},
				error => {
					const responseMessage =
						(error.response &&
							error.response.data &&
							error.response.data.message) ||
						error.message ||
						error.toString();

					this.setState({
						loading: false,
						message: responseMessage,
					});
				}
			);
		} else {
			this.setState({
				loading: false,
			});
		}
	};

	render() {
		const { username, password, loading, message } = this.state;
		return (
			<div>
				<div>
					<img src="//ssl.com/accounts/ui/avatar_2x.png" alt="profile-img" />
					<Form
						onSubmit={this.handleLogin}
						ref={c => {
							this.form = c;
						}}
					>
						<div>
							<label>Username</label>
							<Input
								type="text"
								name="username"
								value={username}
								onChange={this.onChangeUsername}
								validations={[required]}
							></Input>
						</div>

						<div>
							<label>Password</label>
							<Input
								type="password"
								name="password"
								value={password}
								onChange={this.onChangePassword}
								validations={[required]}
							></Input>
						</div>

						<div>
							<button>
								{loading && <span>spinner</span>}
								<span>Login</span>
							</button>
						</div>

						{message && (
							<div>
								<div>{message}</div>
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
