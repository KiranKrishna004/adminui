/** @format */

const initialState = {
	members: [],
};

const membersReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET":
			return { members: action.payload };
		case "DEL":
			return {
				...state,
				members: state.members.filter(({ name }) => name !== action.payload),
			};
		case "EDIT":
			const newArray = [...state.members];
			newArray[action.payload.id].name = action.payload.enteredName;
			return { ...state, members: newArray };

		case "CHECKDEL":
			return {
				...state,
				members: state.members.filter(({ id }) => id !== action.payload.id),
			};
		default:
			return state;
	}
};

export default membersReducer;
