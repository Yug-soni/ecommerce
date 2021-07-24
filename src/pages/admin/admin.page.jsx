import React from "react";
import styled from "styled-components";

import NavBar from "../../components/navbar.component";
import Footer from "../../components/footer.component";

const Spacer = styled.div`
	min-height: 60vh;
	background-color: #f0f0f0f0;
`;

class AdminPage extends React.Component {
	render() {
		return (
			<>
				<NavBar />
				<Spacer />
				<Footer />
			</>
		);
	}
}

export default AdminPage;
