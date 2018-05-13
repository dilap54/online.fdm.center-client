import {combineReducers} from 'redux'
import accountReducer from './account'
import productsReducer from './products'
import materialsReducer from './materials'
import mainPageReducer from './mainPage'

export default combineReducers({
  account: accountReducer,
  products: productsReducer,
  materials: materialsReducer,
  mainPage: mainPageReducer
})
