import React, { Component } from "react";
import TopBar from "../../components/top-bar/TopBar.component";
import SideBar from "../../components/side-bar/SideBar.component";
import Home from "../home/Home.page";

import { Switch, Route } from "react-router-dom";

import "./Admin.styles.css";
import UserList from "../user-list/UserList.page";
import User from "../user/User.page";

class Admin extends Component {
	render() {
		return (
			<div>
				<TopBar />
				<div className="container">
					<SideBar />
					<Switch>
						<Route exact path="/admin/home">
							<Home />
						</Route>
						<Route exact path="/admin/users">
							<UserList />
						</Route>
						<Route exact path="/admin/user/:userId">
							<User />
						</Route>
					</Switch>
				</div>
			</div>
		);
	}
}

export default Admin;
