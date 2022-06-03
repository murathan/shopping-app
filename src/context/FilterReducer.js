const FilterReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_BRAND_FILTER':
			if (!state.brands.includes(action.payload)) {
				return {
					...state,
					brands: [...state.brands, action.payload],
				};
			} else {
				return {
					...state,
					brands: state.brands.filter((brand) => action.payload !== brand),
				};
			}
		case 'REMOVE_BRAND_FILTER':
			return {
				...state,
				brands: state.brands.filter((brand) => action.payload !== brand),
			};
		case 'ADD_TAG_FILTER':
			if (!state.tags.includes(action.payload)) {
				return {
					...state,
					tags: [...state.tags, action.payload],
				};
			} else {
				return {
					...state,
					tags: state.tags.filter((tag) => action.payload !== tag),
				};
			}
		case 'REMOVE_TAG_FILTER':
			return {
				...state,
				tags: tags.filter((tag) => action.payload !== tag),
			};
		case 'ADD_TYPE_FILTER':
			if (!state.types.includes(action.payload)) {
				return {
					...state,
					types: [...state.types, action.payload],
				};
			} else {
				return {
					...state,
					types: state.types.filter((type) => action.payload !== type),
				};
			}
		case 'REMOVE_TYPE_FILTER':
			return {
				...state,
				types: types.filter((type) => action.payload !== type),
			};
		case 'SET_SORTING_CHOICE':
			return {
				...state,
				sortingChoice: action.payload,
			};
		default:
			return state;
	}
};

export { FilterReducer };
