import { applyMiddleware, combineReducers, createStore } from "redux";
import { navReducer } from "./reducer/navReducer";
import thunk from "redux-thunk";
import { getFeedReducer } from "./reducer/getFeedReducer";

const rootReducer = combineReducers({
    navigate: navReducer,
    getFeed: getFeedReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
