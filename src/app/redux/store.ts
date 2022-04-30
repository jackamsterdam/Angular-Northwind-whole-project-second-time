import { productsReducer } from "./products-state";
import {combineReducers, createStore} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";



// Creating reducers object from all our reducers:
const reducers = combineReducers({
    productsState: productsReducer
})
// The most important Redux object:
const store = createStore(reducers, composeWithDevTools())
export default store 