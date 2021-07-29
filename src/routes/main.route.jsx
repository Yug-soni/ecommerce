import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/login/login";
import Register from "../pages/register/register";

class Main extends React.Component {
	render() {
		return (
			<Switch>
				<Route path="/" exact component={() => <div>Homepage</div>} />
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />
			</Switch>
		);
	}
}

export default Main;
