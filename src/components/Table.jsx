/** @format */

import Entries from "./Entries";

const Table = () => {
	return (
		<table className='min-w-full'>
			<thead className='border-b'>
				<tr>
					<th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
						<input type='checkbox' />
					</th>
					<th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
						Name
					</th>
					<th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
						Email
					</th>
					<th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
						Role
					</th>
					<th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
						Actions
					</th>
				</tr>
			</thead>
			<tbody>
				<Entries />
			</tbody>
		</table>
	);
};
export default Table;
