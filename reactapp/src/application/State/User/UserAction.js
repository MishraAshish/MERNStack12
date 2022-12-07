import * as actionType from "../actionTypes";

export const AddUser = (user)=>{
    return {
        type : actionType.USER_ADDUSER,
        payload : user //this paload can be accessed in UserReducer switch
    }
}