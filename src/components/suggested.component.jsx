import React, { Component } from "react";

import Heading from "./heading.component";
import { MainSliderWrapper } from "../shared/slider.elements";
import {
	CardsWrapper,
	CardWrapper,
	ImageWrapper,
	Image,
	ImageHeading,
	Discount,
	Slogan,
} from "../shared/suggested.elements";

class Suggested extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isLoading: true,
			error: null,
		};
	}

	componentDidMount() {
		fetch("http://localhost:8080/getDealsOfTheDay")
			.then(response => response.json())
			.then(data => {
				this.setState(
					{
						data: data,
						isLoading: false,
						error: null,
					},
					() => {
						console.log("Data fetched successfully.");
						console.log(this.state.data);
					}
				);
			})
			.catch(error => {
				this.setState({
					error: error,
				});
			});
	}

	render() {
		const { data, error, isLoading } = this.state;
		if (error) {
			return <h1>{error}</h1>;
		} else if (isLoading) {
			return <h1>Loading....</h1>;
		}
		return (
			<MainSliderWrapper>
				<Heading heading="Deals of-the Day" />
				<CardsWrapper>
					{data.map(item => (
						<CardWrapper key={item.id}>
							<ImageWrapper>
								<Image src={item.imageUrl} alt={item.slogan} />
							</ImageWrapper>
							<ImageHeading>{item.displayName.toUpperCase()}</ImageHeading>
							<Discount>Min {item.discount}% dis</Discount>
							<Slogan>{item.slogan}</Slogan>
						</CardWrapper>
					))}
				</CardsWrapper>
			</MainSliderWrapper>
		);
	}
}

export default Suggested;
