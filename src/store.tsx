import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

import { customerReducer } from "./features/customers/customerSlice";
import { accountReducer } from "./features/account/accountSlice";

const rootReducer = combineReducers({
	account: accountReducer,
	customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;