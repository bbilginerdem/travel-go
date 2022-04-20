import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import icon from "../../images/jet-fighter-solid-01.png";
import { RowWrapper, Icon } from "./Row.style";
// import useClickOutside from "./useClickOutside";
import FlightCard from "../FlightCard/FlightCard";

function Row() {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isVisible, setIsVisible] = useState(false);
	// const ref = useRef(null);
	// useClickOutside(ref, () => setIsVisible(false));

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		const ENDPOINT =
			"https://sd26cjicx5izxcazmcjs6f6hpi0zcexq.lambda-url.eu-central-1.on.aws/";

		axios(ENDPOINT)
			.then((response) => {
				setIsLoading(false);
				if (response.data) {
					setPosts(response.data);
				} else {
					console.log("No data");
				}
			})
			.catch((error) => {
				setIsLoading(false);
				console.log("ERR:", error);
			});
	};

	const handleClick = async () => {
		setIsVisible(true);
		// const index = event.currentTarget.getAttribute("data-row-id");
		// this.setState({ clicked_id: index });
	};

	const postsRenderer = posts.map((post, index) => (
		<tr
			// ref={ref}
			onClick={handleClick}
			key={e.index}
			// data-row-id={e.index}
		>
			<td>
				<Icon>
					<img src={icon} alt="icon" />
				</Icon>
			</td>
			<td>{post.duration.substr(0, post.duration.indexOf("("))}</td>
			<td>
				{post.arrival_time.replace(/^0*(.+)/, "$1")}-
				{post.departure_time.replace(/^0*(.+)/, "$1")}
			</td>
			<td>
				<div>{post.stop}</div>
				<div>{post.stop_detail}</div>
			</td>
			<td>
				<div>{post.price.total}</div>
				<div>{post.trip_type}</div>
			</td>
		</tr>
	));

	const content = isLoading ? (
		<div>Loading...</div>
	) : (
		<div>
			<table>
				<tbody>{postsRenderer}</tbody>
			</table>
		</div>
	);

	return (
		<RowWrapper>
			{content}
			{isVisible && <FlightCard data={posts} />}
		</RowWrapper>
	);
}

export default Row;
