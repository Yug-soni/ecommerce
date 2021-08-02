import React, { Component } from "react";

class Logout extends Component {
	componentDidMount() {
		var myHeaders = new Headers();
		myHeaders.append(
			"Authorization",
			"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5QGdtYWlsLmNvbSIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJVU0VSIn1dLCJpYXQiOjE2Mjc5MTg3ODQsImV4cCI6MTYzMDI2MTgwMH0.X4HN8UkdW1ET7HdPtspddG9WD5kzC-HkBKwrSAZPKpWVL-A7z9JNBbmieYPW34GSDlMe2WKANBbOaesoTXMiaw"
		);

		var requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow",
		};

		fetch("http://localhost:8080/test", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log("error", error));
	}

	render() {
		return <div>Logout</div>;
	}
}

export default Logout;
