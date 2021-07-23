import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./theme/GlobalStyles";
import Theme from "./theme/Theme";

import "./imports.css";

ReactDOM.render(
	<ThemeProvider theme={Theme}>
		<Router>
			<GlobalStyles />
			<App />
		</Router>
	</ThemeProvider>,
	document.getElementById("root")
);
