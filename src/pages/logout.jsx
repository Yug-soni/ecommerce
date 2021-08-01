import React, { Component } from "react";

class Logout extends Component {
	componentDidMount() {
		fetch("http://localhost:8080/logout", {
			redirect: "follow",
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.error(error));
	}

	render() {
		return <div>Logout</div>;
	}
}

export default Logout;
