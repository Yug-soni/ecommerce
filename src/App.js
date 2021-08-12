import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import Admin from "./pages/admin/Admin.page";
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<Switch>
				<Route path="/login" component={Login} exact />
				<Route path="/register" component={Register} exact />
				<Route path="/profile" component={Profile} exact />
				<Route path="/admin" component={Admin} />
			</Switch>
		);
	}
}

export default App;
