import React from "react";

import "./TopBar.styles.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

function TopBar() {
	return (
		<div className="top-bar">
			<div className="top-bar-wrapper">
				<div className="top-left">
					<span className="logo">Admin</span>
				</div>

				<div className="top-right">
					<div className="top-bar-icon-container">
						<NotificationsNone />
						<span className="top-icon-badge">2</span>
					</div>
					<div className="top-bar-icon-container">
						<Language />
						<span className="top-icon-badge">2</span>
					</div>
					<div className="top-bar-icon-container">
						<Settings />
					</div>
					<img
						src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
						alt=""
						className="top-avatar"
					/>
				</div>
			</div>
		</div>
	);
}

export default TopBar;
