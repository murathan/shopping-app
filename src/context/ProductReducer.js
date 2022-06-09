const ProductReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_PRODUCTS':
			return {
				...state,
				products: [...action.payload.items],
			};
		default:
			return state;
	}
};

export { ProductReducer };
