import { createStore } from "redux";
import { combineReducers } from "redux";
import alertReducer from "../modules/alertReducer";


const rootReducer = combineReducers({
    alert: alertReducer,
});
const store = createStore(rootReducer);

export default store; 