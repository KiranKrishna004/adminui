/** @format */

import "./App.css";
import Search from "./components/Search";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Fetch from "./components/Fetch";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import allReducers from "./reducers/allReducers";
import Delete from "./components/Delete";
const App = () => {
	const store = createStore(allReducers);

	return (
		<Provider store={store}>
			<Fetch />
			<Search />
			<Table />
			<div className='w-full flex justify-center'>
				<Delete />
			</div>
			<div className='flex justify-center items-center'>
				<Pagination />
			</div>
		</Provider>
	);
};

export default App;
