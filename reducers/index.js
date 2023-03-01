import { combineReducers } from "redux";
import counterReducer from "./reducer2";
import rootReducer from "./reducers12";


const reducer = combineReducers({
    root : rootReducer,
    counter : counterReducer,
})

export default reducer