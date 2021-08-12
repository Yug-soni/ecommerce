import React from "react";

import "./WidgetLarge.styles.css";

function WidgetLarge() {
	const Button = ({ type }) => (
		<button className={"widget-large-button " + type.toLowerCase()}>
			{type}
		</button>
	);

	return (
		<div className="widget-large">
			<h3 className="widget-large-title">Latest Transactions</h3>
			<table className="widget-large-table">
				<tr className="widget-large-tr">
					<th className="widget-large-th">Customer</th>
					<th className="widget-large-th">Date</th>
					<th className="widget-large-th">Amount</th>
					<th className="widget-large-th">Status</th>
				</tr>
				<tr className="widget-large-tr">
					<td className="widget-large-user">
						<img
							src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							alt=""
							className="widget-large-image"
						/>
						<span className="widget-large-name">Test Name</span>
					</td>
					<td className="widget-large-date">12 Aug 2021</td>
					<td className="widget-large-amount">$122.21</td>
					<td className="widget-large-status">
						<Button type="Approved" />
					</td>
				</tr>
				<tr className="widget-large-tr">
					<td className="widget-large-user">
						<img
							src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							alt=""
							className="widget-large-image"
						/>
						<span className="widget-large-name">Test Name</span>
					</td>
					<td className="widget-large-date">12 Aug 2021</td>
					<td className="widget-large-amount">$122.21</td>
					<td className="widget-large-status">
						<Button type="Pending" />
					</td>
				</tr>
				<tr className="widget-large-tr">
					<td className="widget-large-user">
						<img
							src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							alt=""
							className="widget-large-image"
						/>
						<span className="widget-large-name">Test Name</span>
					</td>
					<td className="widget-large-date">12 Aug 2021</td>
					<td className="widget-large-amount">$122.21</td>
					<td className="widget-large-status">
						<Button type="Declined" />
					</td>
				</tr>
				<tr className="widget-large-tr">
					<td className="widget-large-user">
						<img
							src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							alt=""
							className="widget-large-image"
						/>
						<span className="widget-large-name">Test Name</span>
					</td>
					<td className="widget-large-date">12 Aug 2021</td>
					<td className="widget-large-amount">$122.21</td>
					<td className="widget-large-status">
						<Button type="Approved" />
					</td>
				</tr>
				<tr className="widget-large-tr">
					<td className="widget-large-user">
						<img
							src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							alt=""
							className="widget-large-image"
						/>
						<span className="widget-large-name">Test Name</span>
					</td>
					<td className="widget-large-date">12 Aug 2021</td>
					<td className="widget-large-amount">$122.21</td>
					<td className="widget-large-status">
						<Button type="Approved" />
					</td>
				</tr>
			</table>
		</div>
	);
}

export default WidgetLarge;
