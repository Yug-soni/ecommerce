import React, { useState } from "react";

import { DataGrid } from "@material-ui/data-grid";
import "./UserList.styles.css";
import { Link } from "react-router-dom";
import { userRows } from "../../DummyData";
import { DeleteOutline } from "@material-ui/icons";

function UserList() {
	const [data, setData] = useState(userRows);

	const handleDelete = id => {
		setData(data.filter(item => item.id !== id));
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 90 },
		{
			field: "user",
			headerName: "User",
			width: 200,
			renderCell: params => {
				return (
					<div className="user-list-user">
						<img className="user-list-img" src={params.row.avatar} alt="" />
						{params.row.username}
					</div>
				);
			},
		},
		{ field: "email", headerName: "Email", width: 200 },
		{
			field: "status",
			headerName: "Status",
			width: 120,
		},
		{
			field: "transaction",
			headerName: "Transaction Volume",
			width: 160,
		},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: params => {
				return (
					<>
						<Link to={"/admin/user/" + params.row.id}>
							<button className="user-list-edit">Edit</button>
						</Link>
						<DeleteOutline
							className="user-list-delete"
							onClick={() => handleDelete(params.row.id)}
						/>
					</>
				);
			},
		},
	];

	return (
		<div className="user-list">
			<DataGrid
				rows={data}
				disableSelectionOnClick
				columns={columns}
				pageSize={8}
				checkboxSelection
			/>
		</div>
	);
}

export default UserList;
