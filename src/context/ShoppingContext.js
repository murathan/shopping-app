import {
	createContext,
	useContext,
	useReducer,
	useMemo,
	useCallback,
	useState,
	useEffect,
} from 'react';
import { combineReducers } from '../utils';
import { CartReducer } from './CartReducer';
import { ProductReducer } from './ProductReducer';
import { FilterReducer } from './FilterReducer';

const initialState = {
	CartReducer: {
		addedProducts: localStorage.getItem('basketItems')
			? JSON.parse(localStorage.getItem('basketItems'))
			: [],
	},
	ProductReducer: { products: [] },
	FilterReducer: {
		brands: [],
		tags: [],
		types: ['mug', 'shirt'],
		sortingChoice: '',
	},
};

const rootReducer = combineReducers({
	CartReducer,
	ProductReducer,
	FilterReducer,
});

const ShoppingContext = createContext();
const useShoppingContext = () => useContext(ShoppingContext);

const ShoppingContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(rootReducer, initialState);
	const store = useMemo(() => [state, dispatch], [state]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		let tempTotalPrice = 0;
		if (store[0].CartReducer.addedProducts) {
			store[0].CartReducer.addedProducts.forEach((product) => {
				tempTotalPrice += product.price * product.count;
			});
		}
		setTotalPrice(tempTotalPrice);
	}, [store[0].CartReducer.addedProducts]);

	const fetchProducts = useCallback(async () => {
		// https://my-json-server.typicode.com/murathan/shopping-app-api/items
		// http://localhost:3001/items
		await fetch('https://api.jsonbin.io/b/62a102d9449a1f3821019833')
			.then((response) => response.json())
			.then((json) =>
				dispatch({
					type: 'FETCH_PRODUCTS',
					payload: json,
				})
			);
	}, []);

	const addProduct = useCallback((product) => {
		dispatch({ type: 'ADD_PRODUCT', payload: product });
	}, []);

	const decreaseAddedProduct = useCallback((productId) => {
		dispatch({ type: 'DECREASE_PRODUCT', payload: productId });
	}, []);

	const increaseAddedProduct = useCallback((productId) => {
		dispatch({ type: 'INCREASE_PRODUCT', payload: productId });
	}, []);

	const addBrandFilter = useCallback((brand) => {
		dispatch({ type: 'ADD_BRAND_FILTER', payload: brand });
	}, []);

	const addTagFilter = useCallback((tag) => {
		dispatch({ type: 'ADD_TAG_FILTER', payload: tag });
	}, []);

	const addTypeFilter = useCallback((type) => {
		dispatch({ type: 'ADD_TYPE_FILTER', payload: type });
	}, []);

	const setSortingChoice = useCallback((choice) => {
		dispatch({ type: 'SET_SORTING_CHOICE', payload: choice });
	}, []);

	return (
		<ShoppingContext.Provider
			value={{
				...store[0],
				fetchProducts,
				addProduct,
				increaseAddedProduct,
				decreaseAddedProduct,
				totalPrice,
				addBrandFilter,
				addTagFilter,
				addTypeFilter,
				setSortingChoice,
			}}
		>
			{children}
		</ShoppingContext.Provider>
	);
};

export default ShoppingContextProvider;
export { useShoppingContext };
