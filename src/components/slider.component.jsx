import React from "react";

import {
	MainSliderWrapper,
	SliderWrapper,
	SliderImage,
	MoveButton,
} from "./../shared/slider.elements";

class Slider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sliderData: [],
			isLoading: true,
			error: null,
			current: 0,
			countDownTime: 10,
			countDown: 10,
		};
	}

	componentDidMount() {
		const url = "http://localhost:8080/getSliderData";
		fetch(url)
			.then(response => response.json())
			.then(
				data => {
					this.setState(
						{
							isLoading: false,
							sliderData: data,
						},
						() => {
							// console.log(this.state);
						}
					);
				},
				error => console.log(error)
			)
			.catch(error => {
				this.setState({
					error: error,
					isLoading: true,
				});
			});
		this.intervalId = setInterval(this.timer, 1000);
	}

	timer = () => {
		this.setState(
			prevState => ({
				countDown: prevState.countDown - 1,
			}),
			() => {
				if (this.state.countDown === 0) {
					this.moveForward();
				}
			}
		);
	};

	resetTimer = () => {
		this.setState(prevState => ({
			countDown: prevState.countDownTime,
		}));
	};

	moveForward = () => {
		this.resetTimer();
		this.setState(prevState => ({
			current:
				prevState.current === prevState.sliderData.length - 1
					? 0
					: prevState.current + 1,
		}));
	};

	moveBackward = () => {
		this.resetTimer();
		this.setState(prevState => ({
			current:
				prevState.current === 0
					? prevState.sliderData.length - 1
					: prevState.current - 1,
		}));
	};

	render() {
		const { sliderData, current } = this.state;
		return (
			<MainSliderWrapper>
				<SliderWrapper>
					{sliderData.map((data, index) => (
						<SliderImage
							key={data.id}
							src={data.imageUrl}
							zIndex={current === index ? 1 : -1}
						/>
					))}
					<MoveButton onClick={this.moveForward} left={true}>
						{">"}
					</MoveButton>
					<MoveButton onClick={this.moveBackward}>{"<"}</MoveButton>
				</SliderWrapper>
			</MainSliderWrapper>
		);
	}
}

export default Slider;
