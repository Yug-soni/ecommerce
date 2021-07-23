import React from "react";

import styled from "styled-components";

const Foot = styled.footer`
	height: 30vh;
	background-color: ${({ theme }) =>
		theme.color.main ? theme.color.main : " #2874f0"};
	color: ${({ theme }) => (theme.color.text ? theme.color.text : " #fff")};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Footer = props => {
	return <Foot>© 2007-2021 Shopping.com</Foot>;
};

export default Footer;
