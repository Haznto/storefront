import { combineReducers } from "redux";
import categoryReducer from "../Reducers/CategoryReducer";
import cartReducer from "../Reducers/CartReducer";
// import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";


const reducer = combineReducers({ categoryReducer, cartReducer })
const store = () => {
    // return createStore(reducers,applyMiddleware(thunk))
    return configureStore({ reducer });
}

export default store()
