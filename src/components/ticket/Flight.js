import React, { useEffect } from "react";
import { Container } from "../../styles/Common.style";
import {
	FlightCard,
	FlightGrid,
	FlightHeader,
	FlightWrapper,
} from "./Flight.style";

const Flight = () => {
	useEffect(() => {
		console.log("Loaded Home");
	}, []);
	return <div>Loading...</div>;
};

export default Flight;
