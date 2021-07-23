import React, { Component } from "react";

import Heading from "./heading.component";
import { MainSliderWrapper } from "../shared/slider.elements";

class Suggested extends Component {
	render() {
		return (
			<MainSliderWrapper>
				<Heading heading="Discounts for You" />
			</MainSliderWrapper>
		);
	}
}

export default Suggested;
