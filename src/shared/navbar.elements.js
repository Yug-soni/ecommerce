import styled, { css } from "styled-components";

export const Spacer = styled.div`
	width: 10%;
	background-color: ${({ theme }) =>
		theme.color.main ? theme.color.main : " #2874f0"};
`;

export const Header = styled.header`
	width: 100%;
	background-color: ${({ theme }) =>
		theme.color.main ? theme.color.main : " #2874f0"};
	display: flex;
	align-items: center;
`;

export const LogoWrapper = styled.div`
	/* background-color: #000; */
	margin: 0.6rem 1rem 0.6rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
`;

export const Logo = styled.h1`
	color: ${({ theme }) => (theme.color.text ? theme.color.text : " #fff")};
	font-weight: bolder;
	font-size: 25px;
	cursor: pointer;
`;

export const Slogan = styled.p`
	color: #f5f5f5;
	font-weight: lighter;
	font-size: 10px;
	left: 100px;
`;

export const SearchBarWrapper = styled.div`
	/* background-color: #000; */
	margin-right: 5%;
	border-radius: 5px 0 0 5px;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`;

export const SearchBar = styled.input`
	border: none;
	border-style: none;
	height: 1.7rem;
	width: 25rem;
	border-radius: 5px 0 0 5px;
	padding: 0 0 0 12px;
	cursor: text;

	&:focus {
		outline: none;
	}
`;

export const IconWrapper = styled.div`
	background-color: ${props => (props.bg ? props.bg : "unset")};
	width: 1.7rem;
	height: 1.7rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0 5px 5px 0;
	padding: 0 12px 0 0;
`;

export const Icon = styled.img`
	/* width: 1.5rem; */
	/* height: 1.5rem; */
	${({ size, theme }) =>
		size &&
		css`
			width: ${() => (theme.icon[size] ? theme.icon[size] : "0.5rem")};
			height: ${() => (theme.icon[size] ? theme.icon[size] : "0.5rem")};
		`}
	cursor: pointer;
`;

export const ListWrapper = styled.div`
	/* background-color: #000; */
	color: ${({ theme }) => (theme.color.text ? theme.color.text : " #fff")};
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

export const ListItem = styled.div`
	padding: 1.2rem;
	margin: 3px;
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const ItemHeading = styled.h1`
	padding: 0.2rem;
	font-size: 15px;
`;
