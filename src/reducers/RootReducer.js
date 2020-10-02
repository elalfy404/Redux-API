import { combineReducers } from "redux";
import dataReducers from "./dataReducers";

const RootReducer = combineReducers({
    dataReducers: dataReducers,
});

export default RootReducer;
