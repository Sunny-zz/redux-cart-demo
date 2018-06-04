import products from './products.js'
import cart from './cart.js'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
  products,
  cart
})

export default rootReducer
