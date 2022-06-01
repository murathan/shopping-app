import { createContext, useContext, useReducer, useMemo } from "react";
import { combineReducers } from "../utils";
import { CartReducer } from "./CartReducer";

const initialState = { CartReducer: { addedProducts: [] } };
const rootReducer = combineReducers({ CartReducer });

const ShoppingContext = createContext({
	sorting: "priceLowToHigh",
	brands: [],
	tags: [],
	type: "shirt",
	products: [],
	addedProducts: [],
});
const useShoppingContext = () => useContext(ShoppingContext);

const ShoppingContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(rootReducer, initialState);
	const store = useMemo(() => [state, dispatch], [state]);
	console.log(store);
	const increaseAddedProduct = (productId) => {
		dispatch({ type: "INCREASE_PRODUCT", payload: productId });
	};
	return (
		<ShoppingContext.Provider value={{ ...store, increaseAddedProduct }}>
			{children}
		</ShoppingContext.Provider>
	);
};

export default ShoppingContextProvider;
export { useShoppingContext };
