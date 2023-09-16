import { createStore, combineReducers } from "redux";
import { categoryReducer } from "../Reducers/CategoryReducer";

const reducers = combineReducers({ categoryReducer })
const store = () => {
    return createStore(reducers)
}

export default store()
