/** @format */
import membersReducer from "./membersReducer";
import pageReducer from "./pageReducer";
import searchReducer from "./searchReducer";
import { combineReducers } from "redux";
import checkListReducer from "./checkListReducer";

const allReducers = combineReducers({
	members: membersReducer,
	page: pageReducer,
	search: searchReducer,
	list: checkListReducer,
});

export default allReducers;
