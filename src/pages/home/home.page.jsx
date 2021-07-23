import React from "react";

import NavBar from "../../components/navbar.component";
import Slider from "../../components/slider.component";
import Footer from "../../components/footer.component";
import Suggested from "../../components/suggested.component";

const HomePage = props => {
	return (
		<>
			<NavBar />
			<Slider />
			<Suggested />
			<Footer />
		</>
	);
};

export default HomePage;
