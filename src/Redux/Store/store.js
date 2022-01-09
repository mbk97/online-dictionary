import { createStore } from "redux";
import { rootReducer } from "../Reducers/rootReducers";
import thunk from 'redux-thunk'
import { applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'



export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))