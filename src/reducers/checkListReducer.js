/** @format */

const initialState = { list: [] };

const checkListReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD":
			return {
				...state,
				list: [...state.list, action.payload],
			};
		case "REMOVE":
			return {
				...state,
				list: state.list.filter(({ name }) => name !== action.payload.name),
			};
		default:
			return state;
	}
};
export default checkListReducer;
