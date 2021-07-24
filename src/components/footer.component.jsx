import React from "react";

import styled from "styled-components";

const Foot = styled.footer`
	height: 30vh;
	background-color: #3b3838;
	color: ${({ theme }) => (theme.color.text ? theme.color.text : " #fff")};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Footer = props => {
	return <Foot>© 2007-2021 Shopping.com</Foot>;
};

export default Footer;
