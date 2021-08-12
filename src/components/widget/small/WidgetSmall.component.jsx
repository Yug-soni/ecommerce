import React from "react";
import { Visibility } from "@material-ui/icons";
import "./WidgetSmall.styles.css";

function WidgetSmall() {
	return (
		<div className="widget-small">
			<span className="widget-small-title">New Join Members</span>
			<ul className="widget-small-list">
				<li className="widget-small-list-item">
					<img
						src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
						alt=""
						className="widget-small-image"
					/>
					<div className="widget-small-user">
						<span className="widget-small-user-name">Dummy User</span>
						<span className="widget-small-user-title">S-SDE Pro</span>
					</div>
					<button className="widget-small-button">
						<Visibility className="widget-small-icon" /> Display
					</button>
				</li>
				<li className="widget-small-list-item">
					<img
						src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
						alt=""
						className="widget-small-image"
					/>
					<div className="widget-small-user">
						<span className="widget-small-user-name">Dummy User</span>
						<span className="widget-small-user-title">S-SDE Pro</span>
					</div>
					<button className="widget-small-button">
						<Visibility className="widget-small-icon" /> Display
					</button>
				</li>
				<li className="widget-small-list-item">
					<img
						src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
						alt=""
						className="widget-small-image"
					/>
					<div className="widget-small-user">
						<span className="widget-small-user-name">Dummy User</span>
						<span className="widget-small-user-title">S-SDE Pro</span>
					</div>
					<button className="widget-small-button">
						<Visibility className="widget-small-icon" /> Display
					</button>
				</li>
				<li className="widget-small-list-item">
					<img
						src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
						alt=""
						className="widget-small-image"
					/>
					<div className="widget-small-user">
						<span className="widget-small-user-name">Dummy User</span>
						<span className="widget-small-user-title">S-SDE Pro</span>
					</div>
					<button className="widget-small-button">
						<Visibility className="widget-small-icon" /> Display
					</button>
				</li>
				<li className="widget-small-list-item">
					<img
						src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
						alt=""
						className="widget-small-image"
					/>
					<div className="widget-small-user">
						<span className="widget-small-user-name">Dummy User</span>
						<span className="widget-small-user-title">S-SDE Pro</span>
					</div>
					<button className="widget-small-button">
						<Visibility className="widget-small-icon" /> Display
					</button>
				</li>
			</ul>
		</div>
	);
}

export default WidgetSmall;
