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
import { productList } from '../dummyData';

const initialState = {
	CartReducer: { addedProducts: [] },
	ProductReducer: { products: [] },
};

// {
//   sorting: 'priceLowToHigh',
//   brands: [],
//   tags: [],
//   type: 'shirt',
//   products: productList,
//   addedProducts: []
// }
const rootReducer = combineReducers({ CartReducer, ProductReducer });

const ShoppingContext = createContext();
const useShoppingContext = () => useContext(ShoppingContext);

const ShoppingContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(rootReducer, initialState);
	const store = useMemo(() => [state, dispatch], [state]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		let tempTotalPrice = 0;
		store[0].CartReducer.addedProducts.forEach((product) => {
			tempTotalPrice += product.price * product.count;
		});
		setTotalPrice(tempTotalPrice);
	}, [store[0].CartReducer.addedProducts]);

	const fetchProducts = useCallback(async () => {
		// dispatch({ type: 'FETCH_PRODUCTS', payload: productList });
		await fetch(
			'https://my-json-server.typicode.com/murathan/shopping-app-api/items'
		)
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
	return (
		<ShoppingContext.Provider
			value={{
				...store[0],
				fetchProducts,
				addProduct,
				increaseAddedProduct,
				decreaseAddedProduct,
				totalPrice,
			}}
		>
			{children}
		</ShoppingContext.Provider>
	);
};

export default ShoppingContextProvider;
export { useShoppingContext };
