import styled from "styled-components";

export const MainSliderWrapper = styled.div`
	width: 100%;
	padding: 1rem 0.5rem;
	background-color: #f5f5f5;
`;

export const SliderWrapper = styled.div`
	overflow: hidden;
	height: 18rem;
	position: relative;
`;

export const SliderImage = styled.img`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	opacity: ${({ zIndex }) => (zIndex === 1 ? 1 : 0)};
	z-index: ${({ zIndex }) => zIndex};
	cursor: pointer;
	transition: all 1s ease 0.1s;
`;

export const MoveButton = styled.button`
	font-size: 40px;
	font-weight: bolder;
	position: absolute;
	z-index: 999;
	color: ${({ theme }) => (theme.color.main ? theme.color.main : " #2874f0")};
	background-color: ${({ theme }) =>
		theme.color.text ? theme.color.text : " #fff"};
	top: 32%;
	left: ${({ left }) => (left ? "96%" : "-0.5%")};
	border: none;
	padding: 2rem 1rem;
	margin: 3px;
	transition: all 0.3s ease 0.1s;
	box-shadow: 2px 2px 5px grey;

	&:hover {
		background-color: ${({ theme }) =>
			theme.color.main ? theme.color.main : " #2874f0"};
		color: ${({ theme }) => (theme.color.text ? theme.color.text : " #fff")};
	}
`;
