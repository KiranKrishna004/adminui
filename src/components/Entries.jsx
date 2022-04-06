/** @format */

import { useSelector, useDispatch } from "react-redux";

const Entries = () => {
	const dispatch = useDispatch();
	const members = useSelector((state) => state.members.members);
	const page = useSelector((state) => state.page.page);
	const search = useSelector((state) => state.search.search);
	const list = useSelector((state) => state.list.list);
	return (
		<>
			{members
				.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
				.map((item, index) => {
					return page === Math.ceil((index + 1) / 10) ? (
						<tr key={item.id} className='border-b accent-pink-500'>
							<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
								<input
									type='checkbox'
									onClick={(e) => {
										e.target.checked
											? dispatch({ type: "ADD", payload: item })
											: dispatch({ type: "REMOVE", payload: item });
									}}
								/>
							</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
								{item.name}
							</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
								{item.email}
							</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
								{item.role}
							</td>
							<td
								key={item.id}
								className='flex px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
								<button
									onClick={() => {
										const enteredName = prompt("Enter you name");
										enteredName !== null
											? dispatch({
													type: "EDIT",
													payload: {
														enteredName: enteredName,
														id: item.id - 1,
													},
											  })
											: alert("Nothing to Update");
									}}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 mx-1'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										strokeWidth='2'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
										/>
									</svg>
								</button>
								<button
									onClick={() => {
										dispatch({
											type: "DEL",
											payload: item.name,
										});
									}}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 mx-1'
										fill='red'
										viewBox='0 0 24 24'
										stroke='currentColor'
										strokeWidth='2'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
										/>
									</svg>
								</button>
							</td>
						</tr>
					) : (
						<></>
					);
				})}
		</>
	);
};
export default Entries;
