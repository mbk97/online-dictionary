import { combineReducers } from "redux";
import { fetchWordReducer } from "./reducer";



export const rootReducer = combineReducers({
    fetchWordState:fetchWordReducer
})