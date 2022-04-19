import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "../../styles/Common.style";
import {
	// FlightCard,
	// FlightGrid,
	// FlightHeader,
	FlightWrapper,
} from "./Flight.style";

const Flight = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		const ENDPOINT =
			"https://sd26cjicx5izxcazmcjs6f6hpi0zcexq.lambda-url.eu-central-1.on.aws/";
		axios(ENDPOINT)
			.then((response) => {
				setIsLoading(false);
				console.log("RES:", response.data);
				if (response.data) {
					setPosts(response.data);
				} else {
					console.log("no data");
				}
			})
			.catch((error) => {
				setIsLoading(false);
				console.log("ERR:", error);
			});
	};

	const postsRenderer = posts.map((post, index) => <div key={index}>{post.duration}</div>);

	const content = isLoading ? (
		<div>Loading...</div>
	) : (
		<div>{postsRenderer}</div>
	);

	return (
		<div>
			<FlightWrapper>
				<Container>
					<h1>First class travel at economy prices</h1>
					<h3>Select a tour that suits you below.</h3>
					{content}
				</Container>
			</FlightWrapper>
		</div>
	);
};

export default Flight;
