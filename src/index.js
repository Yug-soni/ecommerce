import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyles from "./theme/GlobalStyles";
import Theme from "./theme/Theme";

ReactDOM.render(
	<Router>
		<GlobalStyles theme={Theme} />
		<App />
	</Router>,
	document.getElementById("root")
);
