import React from "react";
import { Container } from "../../styles/Common.style";
import { FlightWrapper } from "./Flight.style";
import Row from "../row/Row";

const Flight = () => {
	return (
		<div>
			<FlightWrapper>
				<Container>
					<h1>First class travel at economy prices</h1>
					<h3>Select a tour that suits you below.</h3>
					<Row />
				</Container>
			</FlightWrapper>
		</div>
	);
};

export default Flight;
