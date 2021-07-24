import styled from "styled-components";

export const HeadingWrapper = styled.div`
	width: 100%;
	height: 5rem;
	margin-top: 1rem;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* border-bottom: 0.5px solid #000; */
	box-shadow: 2px 2px 5px grey;
`;

export const HeadingH1 = styled.h1`
	letter-spacing: 1px;
	word-spacing: 0.1px;
	font-size: 20px;
	font-weight: bolder;
	margin: 0 1rem;
`;

export const ViewAllButton = styled.button`
	background-color: ${({ theme }) =>
		theme.color.main ? theme.color.main : " #2874f0"};
	color: ${({ theme }) => (theme.color.text ? theme.color.text : " #fff")};
	padding: 0.5rem 1.5rem;
	margin: 0 1rem;
	border: none;
	border-radius: 2px;
	border: 1px solid
		${({ theme }) => (theme.color.main ? theme.color.main : " #2874f0")};
	font-weight: bold;
	font-size: 12px;
	transition: all 0.3s ease 0.1s;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) =>
			theme.color.text ? theme.color.text : " #fff"};
		color: ${({ theme }) => (theme.color.main ? theme.color.main : " #2874f0")};
	}
`;
