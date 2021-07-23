import React, { Component } from "react";

import Heading from "./heading.component";
import { MainSliderWrapper } from "../shared/slider.elements";
import { CardsWrapper } from "../shared/suggested.elements";

class Suggested extends Component {
	render() {
		return (
			<MainSliderWrapper>
				<Heading heading="Deals of-the Day" />
				<CardsWrapper>Here we have to display all of the cards.</CardsWrapper>
			</MainSliderWrapper>
		);
	}
}

export default Suggested;
