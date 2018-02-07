import { applyMiddleware, createStore } from "redux";
import userReducer from "./app/reducers/userReducer";

import thunk from "redux-thunk";
import promise from "redux-promise-middleware";


let store = createStore(userReducer);
export default store;