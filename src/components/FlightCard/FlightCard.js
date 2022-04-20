import React from "react";
import { FlightCardWrapper, FlightCardSquare, Icon } from "./FlightCard.style";
import icon from "../../images/plane-circle-check-solid-01.png";

function FlightCard(props) {
	const handleClick = () => {
		console.log("xd");
	};

	return (
		<FlightCardWrapper>
			<FlightCardSquare>
				<Icon>
					<img src={icon} alt="icon" />
				</Icon>
				<div>{props.data[0].airline}</div>
				<div>{props.data[0].flight_number}</div>
				<div>{props.data[0].duration}</div>
				<div>
					{props.data[0].arrival_time.replace(/^0*(.+)/, "$1")} -{" "}
					{props.data[0].departure_time.replace(/^0*(.+)/, "$1")}
				</div>
				<div>{props.data[0].stop_detail}</div>
			</FlightCardSquare>
			<div>
				<div>Subtotal</div>
				<div> {props.data[0].price.subTotal}</div>
			</div>
			<div>Taxes and Fees</div>
			<div>{props.data[0].price.fees}</div>
			<div>Total {props.data[0].price.total}</div>
			<button
				className={{ backgroundColor: "blue" }}
				onClick={handleClick}
			>
				Next
			</button>
		</FlightCardWrapper>
	);
}

export default FlightCard;
