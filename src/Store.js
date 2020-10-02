import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer";

const Store = createStore(RootReducer, compose(applyMiddleware(thunk)));

export default Store;
