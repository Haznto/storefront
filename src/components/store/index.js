import { createStore, combineReducers, applyMiddleware } from "redux";
import { categoryReducer } from "../Reducers/CategoryReducer";
import { cartReducer } from "../Reducers/CartReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({ categoryReducer, cartReducer })
const store = () => {
    return createStore(reducers,applyMiddleware(thunk))
}

export default store()
