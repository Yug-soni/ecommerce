import React, { Component } from "react";

class Homepage extends Component {
	componentDidMount() {
		fetch("http://localhost:8080/test")
			.then(data => console.log(data, "Data fetched"))
			.catch(error => {
				console.log("Fetch failed.");
				console.log(error);
			});
	}

	render() {
		return <div></div>;
	}
}

export default Homepage;
