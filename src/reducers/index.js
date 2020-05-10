import { combineReducers } from "redux";
import basketReducer from "./basketReducer";

const reducer = combineReducers({
    ...basketReducer,
});

export default reducer;