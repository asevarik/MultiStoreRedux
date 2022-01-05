import { combineReducers, createStore } from "redux"
import UserReducer2 from "./reducer2/UserReducer";

const rootReducer=combineReducers({user:UserReducer2});
const configureStore2=()=>{
    return createStore(rootReducer);
}
export default configureStore2;