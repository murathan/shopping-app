const CartReducer = (state, action) => {
	switch (action.type) {
		case 'INCREASE_PRODUCT':
			if (state.addedProducts) {
				return {
					...state,
					addedProducts: state.addedProducts.map((product) =>
						product.id === action.payload
							? { ...product, count: product.count + 1 }
							: product
					),
				};
			}
			return {
				...state,
			};
		case 'DECREASE_PRODUCT':
			if (state.addedProducts) {
				return {
					...state,
					addedProducts: state.addedProducts.map((product) =>
						product.id === action.payload && product.count >= 1
							? { ...product, count: product.count - 1 }
							: product
					),
				};
			}
			return {
				...state,
			};
		case 'ADD_PRODUCT':
			if (
				state.addedProducts &&
				!state.addedProducts.some((product) => product.id === action.payload.id)
			) {
				return {
					...state,
					addedProducts: [
						...state.addedProducts,
						{ ...action.payload, count: 1 },
					],
				};
			} else {
				if (state.addedProducts) {
					return {
						...state,
						addedProducts: state.addedProducts.map((product) =>
							product.id === action.payload.id
								? { ...product, count: product.count + 1 }
								: product
						),
					};
				}
				return {
					...state,
				};
			}
		default:
			return state;
	}
};

export { CartReducer };
