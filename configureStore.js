import { combineReducers, createStore } from "redux"
import countReducer from "./reducer1/countReducer"

const rootReducer=combineReducers({count:countReducer});
const configureStore=()=>{
    return createStore(rootReducer);
}
export default configureStore;