import {
	CalendarToday,
	LocationSearching,
	MailOutline,
	PermIdentity,
	PhoneAndroid,
} from "@material-ui/icons";
import React from "react";

import "./User.styles.css";

export default function User() {
	return (
		<div className="user">
			<div className="user-title-container">
				<h1 className="user-title">Edit User</h1>
				<button className="user-add-button">Create</button>
			</div>
			<div className="user-container">
				<div className="user-show">
					<div className="user-show-top">
						<img
							src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							alt=""
							className="user-show-img"
						/>
						<div className="user-show-top-title">
							<span className="user-show-user-name">Test dummy user</span>
							<span className="user-show-user-title">S-SDE nan</span>
						</div>
					</div>
					<div className="user-show-bottom">
						<span className="user-show-title">Account Details</span>
						<div className="user-show-info">
							<PermIdentity className="user-show-icon" />
							<span className="user-show-info-title">dummy89</span>
						</div>
						<div className="user-show-info">
							<CalendarToday className="user-show-icon" />
							<span className="user-show-info-title">12.1000.1999</span>
						</div>
						<div className="user-show-info">
							<PhoneAndroid className="user-show-icon" />
							<span className="user-show-info-title">+91 89.....</span>
						</div>
						<div className="user-show-info">
							<MailOutline className="user-show-icon" />
							<span className="user-show-info-title">dummy89@gmail.com</span>
						</div>
						<div className="user-show-info">
							<LocationSearching className="user-show-icon" />
							<span className="user-show-info-title">Earth | India</span>
						</div>
					</div>
				</div>
				<div className="user-update"></div>
			</div>
		</div>
	);
}
