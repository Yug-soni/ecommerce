import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";


import "./imports.css";

ReactDOM.render(
	<ThemeProvider>
		<Router>
			<App />
		</Router>
	</ThemeProvider>,
	document.getElementById("root")
);
