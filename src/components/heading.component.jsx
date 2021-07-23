import React from "react";

import {
	HeadingWrapper,
	HeadingH1,
	ViewAllButton,
} from "../shared/heading.elements";

const Heading = ({ heading }) => {
	return (
		<HeadingWrapper>
			<HeadingH1>{heading}</HeadingH1>
			<ViewAllButton>VIEW ALL</ViewAllButton>
		</HeadingWrapper>
	);
};

export default Heading;
