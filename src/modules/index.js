import { combineReducers } from "redux";
import { auth } from "./auth";
import { write } from "./write";


export const rootReducers = combineReducers({
    auth,
    write
})