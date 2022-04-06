/** @format */

import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const Fetch = () => {
	const dispatch = useDispatch();
	const apiUrl =
		"https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

	useEffect(() => {
		axios
			.get(apiUrl)
			.then((response) => {
				dispatch({ type: "GET", payload: response.data });
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);
};
export default Fetch;
