import { CHANGE_EMAIL, CHANGE_NAME,} from "../constants";

export function changeName(name){
    return {
        type:CHANGE_NAME,
        payload:name,
    }
}
export function changeEmail(email){
    return {
        type:CHANGE_EMAIL,
        payload:email,
    }
}