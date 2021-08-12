import React from "react";
import FeaturedInfo from "../../components/featured-info/FeaturedInfo.component";
import Chart from "../../components/chart/Chart.component";

import { userData } from "../../DummyData";

import "./Home.styles.css";
import WidgetSmall from "../../components/widget/small/WidgetSmall.component";
import WidgetLarge from "../../components/widget/large/WidgetLarge.component";

function Home() {
	return (
		<div className="home">
			<FeaturedInfo />
			<Chart
				data={userData}
				title="User Analytics"
				grid
				dataKey="Active User"
			/>
			<div className="home-widgets">
				<WidgetSmall />
				<WidgetLarge />
			</div>
		</div>
	);
}

export default Home;
