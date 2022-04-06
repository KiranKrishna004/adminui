/** @format */

import { useDispatch } from "react-redux";
const Search = () => {
	const dispatch = useDispatch();

	return (
		<div className='flex justify-center'>
			<div className='m-3 w-1/2'>
				<div className='input-group relative flex flex-wrap items-stretch w-full mb-4 rounded'>
					<input
						type='search'
						className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
						placeholder='Search'
						onChange={(e) => {
							dispatch({ type: "SEARCH", payload: e.target.value });
						}}
					/>
				</div>
			</div>
		</div>
	);
};
export default Search;
