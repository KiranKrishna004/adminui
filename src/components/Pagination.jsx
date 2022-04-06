/** @format */

import { useSelector, useDispatch } from "react-redux";
const Pagination = () => {
	const members = useSelector((state) => state.members.members);
	const dispatch = useDispatch();
	const search = useSelector((state) => state.search.search);
	const pages = Math.ceil(
		members.filter(({ name }) =>
			name.toLowerCase().includes(search.toLowerCase())
		).length / 10
	);
	const handleClick = (e) => {
		dispatch({ type: "CHANGE", payload: Number(e.target.value) });
	};

	return [...Array(pages)].map((item, index) => {
		return (
			<button
				key={index}
				value={index + 1}
				onClick={handleClick}
				className='py-1 px-3 mr-2 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700  bg-gray-800 text-white border-gray-600 hover:text-white hover:bg-gray-700'>
				{index + 1}
			</button>
		);
	});
};
export default Pagination;
