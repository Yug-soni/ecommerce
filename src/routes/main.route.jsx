import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "../pages/homepage/homepage";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Logout from "../pages/logout";

class Main extends React.Component {
	render() {
		return (
			<Switch>
				<Route path="/" exact component={Homepage} />
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />
				<Route path="/logout" exact component={Logout} />
			</Switch>
		);
	}
}

export default Main;
