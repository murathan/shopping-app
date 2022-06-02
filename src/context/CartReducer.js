const CartReducer = (state, action) => {
	switch (action.type) {
		case "INCREASE_PRODUCT":
			return {
				...state,
				addedProducts: [...state.addedProducts, action.payload],
			};
		case "DECREASE_PRODUCT":
			return state.addedProducts;
		default:
			return state;
	}
};

export { CartReducer };
