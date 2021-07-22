import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import GlobalStyles from "./theme/GlobalStyles";
import Theme from "./theme/Theme";

ReactDOM.render(
	<>
		<GlobalStyles theme={Theme} />
		<App />
	</>,
	document.getElementById("root")
);
