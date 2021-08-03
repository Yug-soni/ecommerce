import React, { Component } from "react";

import AuthenticationService from "../services/authentication.service";

export default class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: AuthenticationService.getCurrentUser(),
		};
	}

	render() {
		const { currentUser } = this.state;
		return (
			<div>
				<header>
					<h3>
						<strong>{currentUser.username}</strong>
					</h3>
				</header>
				<p>
					<strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
					{currentUser.token.substr(currentUser.token.length - 20)}
				</p>
				<p>
					<strong>Id:</strong>
					{currentUser.id}
				</p>
				<p>
					<strong>Email: </strong>
					{currentUser.email}
				</p>
				<p>
					<strong>Authorities:</strong>
				</p>
				<ul>
					{currentUser.roles &&
						currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
				</ul>
			</div>
		);
	}
}
