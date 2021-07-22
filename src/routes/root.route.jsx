import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/home/home.page";
import AdminPage from "../pages/admin/admin.page";

const RootRouter = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/admin" component={AdminPage} />
		</Switch>
	);
};

export default RootRouter;
