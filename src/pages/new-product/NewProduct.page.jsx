import { Publish } from "@material-ui/icons";
import React from "react";

import "./NewProduct.styles.css";

export default function NewProduct() {
	return (
		<div className="new-product">
			<h1 className="add-product-title">New Product</h1>
			<form className="add-product-form">
				<div className="add-product-item">
					<label for="file">
						<Publish className="new-product-icon" />
						Upload Image
					</label>
					<input type="file" id="file" style={{ display: "none" }} />
				</div>
				<div className="add-product-item">
					<label>Name</label>
					<input type="text" placeholder="Apple Air Pods" />
				</div>
				<div className="add-product-item">
					<label>Stock</label>
					<input type="text" placeholder="123" />
				</div>
				<div className="add-product-item">
					<label>Active</label>
					<select name="active" id="active">
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>
				<button className="add-product-button">Create</button>
			</form>
		</div>
	);
}
