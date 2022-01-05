import {CHANGE_EMAIL, CHANGE_NAME} from "./constants";

const initialState={
    name:"",
    email:"",
};
const UserReducer2=(state=initialState,action)=>{
    switch(action.type){
        case CHANGE_NAME:
            return{
                ...state,
                name:action.payload

            };
        case CHANGE_EMAIL:
            return{
                ...state,
                email:action.payload,
            }
        default:
            return state;
    }
}
export default UserReducer2;