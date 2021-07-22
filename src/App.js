import React from "react";

import RootRouter from "./routes/root.route";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<>
				<RootRouter />
			</>
		);
	}
}

export default App;
