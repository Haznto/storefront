import { createStore, combineReducers } from "redux";
import { categoryReducer } from "../Reducers/CategoryReducer";
import { cartReducer } from "../Reducers/CartReducer";


const reducers = combineReducers({ categoryReducer, cartReducer })
const store = () => {
    return createStore(reducers)
}

export default store()
