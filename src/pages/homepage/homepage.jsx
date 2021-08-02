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
		return (
			<div
				style={{
					height: "100vh",
					backgroundColor: "#000",
					color: "#fff",
					fontSize: "4rem",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				HOMEPAGE
			</div>
		);
	}
}

export default Homepage;
