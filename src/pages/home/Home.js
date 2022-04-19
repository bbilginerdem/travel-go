import React from "react";
import Flight from "../../components/ticket/Flight";
import { HomeContainer } from "./Home.style";

const Home = () => {
	return (
		<div>
			<HomeContainer>
				<Flight />
			</HomeContainer>
		</div>
	);
};

export default Home;
