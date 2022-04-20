import React, { useEffect, useState } from "react";
import axios from "axios";
import icon from "../../images/jet-fighter-solid-01.png";
import { RowWrapper, Icon } from "./Row.style";

function Row() {
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

	const postsRenderer = posts.map((post, index) => (
		<RowWrapper>
			<table>
				<tbody>
					<tr className="styleRow">
						<Icon>
							<img src={icon} alt="icon" />
						</Icon>
						<td>
							{post.duration.substr(
								0,
								post.duration.indexOf("(")
							)}
						</td>
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
				</tbody>
			</table>
		</RowWrapper>
	));

	const content = isLoading ? (
		<div>Loading...</div>
	) : (
		<div>{postsRenderer}</div>
	);

	return <div>{content}</div>;
}

export default Row;
