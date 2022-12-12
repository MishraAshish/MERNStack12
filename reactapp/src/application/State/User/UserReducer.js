import * as actionType from "../actionTypes";

const InitialState = {
    userName : "Paribesh",
    password : "MERNSTack",
    street : "Somewhere on earth",
    mobile : "98989"
}

//create a reducer

let UserReducer = (state=InitialState, action)=>{
    console.log("User Reducer", action)
    switch (action.type) {
        case actionType.USER_ADDUSER:
                
                return action.payload;//on the basis of action type being passed a new state is retruned
        default:
             return state;
    }
}

export default UserReducer;