import React from "react";

import searchIconImage from "../assets/search.png";
import shoppingCartIconImage from "../assets/shopping-cart.png";
import downArrowIconImage from "../assets/down-arrow.png";

import {
	Spacer,
	LogoWrapper,
	Header,
	Logo,
	Slogan,
	SearchBar,
	SearchBarWrapper,
	IconWrapper,
	Icon,
	ListWrapper,
	ListItem,
	ItemHeading,
} from "../shared/navbar.elements";

const NavBar = props => {
	return (
		<Header>
			<Spacer />
			<LogoWrapper>
				<Logo>Shopping</Logo>
				<Slogan>--made-easy--</Slogan>
			</LogoWrapper>
			<SearchBarWrapper>
				<SearchBar />
				<IconWrapper bg="#fff">
					<Icon size="size1point5" src={searchIconImage} />
				</IconWrapper>
			</SearchBarWrapper>
			<ListWrapper>
				<ListItem>
					<ItemHeading>Shopping</ItemHeading>
					<Icon size="sizePoint5" src={downArrowIconImage} />
				</ListItem>
				<ListItem>
					<ItemHeading>More</ItemHeading>
					<Icon size="sizePoint5" src={downArrowIconImage} />
				</ListItem>
				<ListItem>
					<Icon size="size1" src={shoppingCartIconImage} />
					<ItemHeading>Cart</ItemHeading>
				</ListItem>
			</ListWrapper>
			<Spacer />
		</Header>
	);
};

export default NavBar;

// <LinkList>
// 	<ListItem>Shopping</ListItem>
// 	<ListItem>More</ListItem>
// 	<ListItem>
// 		<IconWrapper>
// 			<Icon src={shoppingCartIconImage} />
// 		</IconWrapper>
// 		Cart
// 	</ListItem>
// </LinkList>
