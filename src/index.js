import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
	<ThemeProvider theme={{}}>
		<Router>
			<App />
		</Router>
	</ThemeProvider>,
	document.getElementById("root")
);
