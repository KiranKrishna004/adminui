/** @format */
import { useDispatch, useSelector } from "react-redux";
const Delete = () => {
	const dispatch = useDispatch();
	const list = useSelector((state) => state.list.list);
	return (
		<button
			className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center my-5'
			onClick={() =>
				list.map(({ name }) => {
					dispatch({ type: "DEL", payload: name });
					return <></>;
				})
			}>
			Delete Selected
		</button>
	);
};
export default Delete;
