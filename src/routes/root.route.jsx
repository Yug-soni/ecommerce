import React from "react";
import { Switch, Route } from "react-router-dom";

const RootRouter = () => {
	return (
		<Switch>
			<Route
				exact
				path="/"
				component={() => <>You are now on the homepage.</>}
			/>
			<Route
				exact
				path="/admin"
				component={() => <>You are now on the admin.</>}
			/>
		</Switch>
	);
};

export default RootRouter;
