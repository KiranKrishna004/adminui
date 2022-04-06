/** @format */

const initialState = { page: 1 };

const pageReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE":
			return { page: action.payload };
		default:
			return state;
	}
};
export default pageReducer;
