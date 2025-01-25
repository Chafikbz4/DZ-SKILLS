import { combineReducers, createStore } from "redux";
import { userDataReducer } from "./Reducers";

// Combine the reducers
const rootReducer = combineReducers({
  userData: userDataReducer,
});

export const store = createStore(rootReducer);
