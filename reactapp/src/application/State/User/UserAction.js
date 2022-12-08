import * as actionType from "../actionTypes";
import axios from "axios";

export const AddUser = (user)=>{
    return {
        type : actionType.USER_ADDUSER,
        payload : user //this paload can be accessed in UserReducer switch
    }
}

export const signInSignUpUser = (user)=>{
    // thunk - makes it behave synchronously
    return (dispatch)=>{
        // here we go with ajax call : to save data to the server or fetch it from the server
        // using fetch method of react
        console.log("called by dispatch and synced by thunk");
        //dispatch(loading(true));
        axios.post("http://localhost:9000/user/api/signinup",//uri or end point of singninup api
                    user//passing user object to be read as req.body
                )
                .then((ServerData)=>{
                    let signdUser = ServerData.data;
                    //alert(JSON.stringify(signdUser))
                    //sending user to the store
                    dispatch(AddUser(signdUser));//dispatching action with signed user 
                    //dispatch(getUserCart(signdUser._id))
                })
                .catch((err)=>{
                    console.log("err in login ", err)
        })
    }
}