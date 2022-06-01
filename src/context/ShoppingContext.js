import { createContext, useContext, useReducer, useMemo } from 'react'
import { combineReducers } from '../utils'
import { CartReducer } from './CartReducer'
import { ProductReducer } from './ProductReducer'
import { productList } from '../dummyData'
const initialState = {
  CartReducer: { addedProducts: [] },
  ProductReducer: { products: productList }
}

// {
//   sorting: 'priceLowToHigh',
//   brands: [],
//   tags: [],
//   type: 'shirt',
//   products: productList,
//   addedProducts: []
// }
const rootReducer = combineReducers({ CartReducer, ProductReducer })

const ShoppingContext = createContext()
const useShoppingContext = () => useContext(ShoppingContext)

const ShoppingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)
  const store = useMemo(() => [state, dispatch], [state])

  console.log(store[0])
  const increaseAddedProduct = (productId) => {
    dispatch({ type: 'INCREASE_PRODUCT', payload: productId })
  }
  return (
    <ShoppingContext.Provider value={{ ...store[0], increaseAddedProduct }}>
      {children}
    </ShoppingContext.Provider>
  )
}

export default ShoppingContextProvider
export { useShoppingContext }
