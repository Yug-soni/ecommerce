import styled from "styled-components";

export const CardsWrapper = styled.div`
	display: flex;
`;

export const CardWrapper = styled.div`
	overflow: hidden;
	/* margin: 1px; */
	display: flex;
	flex-direction: column;
	width: 20%;
	height: 12rem;
	align-items: center;
	background-color: ${({ theme }) =>
		theme.color.text ? theme.color.text : " #fff"};
	cursor: pointer;

	box-shadow: 2px 2px 5px gray;
	transition: all 500ms ease 100ms;

	&:hover {
		box-shadow: 2px 2px 5px black;
		transform: scale(1.05);
	}
`;

export const ImageWrapper = styled.div``;

export const Image = styled.img`
	width: 100%;
	height: 7em;
`;

export const ImageHeading = styled.h3`
	padding: 1px;
	margin: 3px 0;
	color: #3f4a3e;
	font-size: 0.9em;
`;

export const Discount = styled.h4`
	padding: 1px;
	margin: 1px 0;
	color: #97de90;
	font-size: 0.7em;
`;

export const Slogan = styled.h5`
	padding: 1px;
	margin: 1px 0;
	font-size: 0.7em;
	color: #858585;
`;
