import React from "react";

import {
	LineStyle,
	Timeline,
	TrendingUp,
	MailOutline,
	DynamicFeed,
	ChatBubbleOutline,
	WorkOutline,
	Report,
	PermIdentity,
	Storefront,
	AttachMoney,
	BarChart,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./SideBar.styles.css";

export default function SideBar() {
	return (
		<div className="side-bar">
			<div className="side-bar-wrapper">
				<div className="side-bar-menu">
					<h3 className="side-bar-title">Dashboard</h3>
					<ul className="side-bar-list">
						<Link to="/admin/home" className="link">
							<li className="side-bar-list-item active ">
								<LineStyle className="side-bar-icon" />
								Home
							</li>
						</Link>
						<li className="side-bar-list-item">
							<Timeline className="side-bar-icon" />
							Analytics
						</li>
						<li className="side-bar-list-item">
							<TrendingUp className="side-bar-icon" />
							Sales
						</li>
					</ul>
				</div>
				<div className="side-bar-menu">
					<h3 className="side-bar-title">Quick Menu</h3>
					<ul className="side-bar-list">
						<Link to="/admin/users" className="link">
							<li className="side-bar-list-item ">
								<PermIdentity className="side-bar-icon" />
								Users
							</li>
						</Link>
						<Link to="/admin/products" className="link">
							<li className="side-bar-list-item">
								<Storefront className="side-bar-icon" />
								Products
							</li>
						</Link>
						<li className="side-bar-list-item">
							<AttachMoney className="side-bar-icon" />
							Transactions
						</li>
						<li className="side-bar-list-item">
							<BarChart className="side-bar-icon" />
							Reports
						</li>
					</ul>
				</div>
				<div className="side-bar-menu">
					<h3 className="side-bar-title">Notifications</h3>
					<ul className="side-bar-list">
						<li className="side-bar-list-item ">
							<MailOutline className="side-bar-icon" />
							Mail
						</li>
						<li className="side-bar-list-item">
							<DynamicFeed className="side-bar-icon" />
							Feedback
						</li>
						<li className="side-bar-list-item">
							<ChatBubbleOutline className="side-bar-icon" />
							Messages
						</li>
					</ul>
				</div>
				<div className="side-bar-menu">
					<h3 className="side-bar-title">Staff</h3>
					<ul className="side-bar-list">
						<li className="side-bar-list-item ">
							<WorkOutline className="side-bar-icon" />
							Manage
						</li>
						<li className="side-bar-list-item">
							<Timeline className="side-bar-icon" />
							Analytics
						</li>
						<li className="side-bar-list-item">
							<Report className="side-bar-icon" />
							Report
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
