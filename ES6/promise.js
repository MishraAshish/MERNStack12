// callBack and callback hell - too much of call backs if one call back fails then other enter a infinite loop

// function SigninSignUp(AuthenticationCallback, AuthorizationCallback, NavigationCallback) {
//     let ValidUser =  AuthenticationCallback(userid, password, AuthorizationCallback); //making a server call - ajax (in async)
//         if (ValidUser) {
//             let userRole = AuthorizationCallback(ValidUser, NavigationCallback); //making a server call - ajax (in async)            
//             //userRole.whatisTheOutput //success or failed -- promise
//             if (userRole) { 
//                 let nextPage = NavigationCallback(userRole) //making a server call - ajax (in async)
//             } else {
//                 //check again for the user validity
//                 SigninSignUp(...callbacks);
//             }
//         } else {
//             //send him on forgot password 
//         }
// }

// SigninSignUp(AuthenticationFunc, AuthorizationFunc, NavigationFunc)
// function AuthenticationFunc(params) {}
// function AuthorizationFunc(params) {}
// function NavigationFunc(params) {}


//Promises : These are the proxy objects that give us a control to check the status of promise and 
// upon revelant status we also get the type, payload associated with that in response
// promise will have 3 states - pending, fullfilled/resolved (then), rejected (catch)

let LunchPromise = new Promise((resolve, reject)=>{

        //do authentication - userid,pwd - userservice// timetaking
        //let authenticationData = AuthenticationCall(userid, pwd);
        //authenticationData.success ? resolve(authenticationData) : reject(authenticationData);

        //let products = fetchProduct(userid) // server call to fetch user products can be secondary
            
        
        //set timeout is assumed to be the server call / async call
        //setTimeout(() => {
            resolve({ //this out put is assumed to be sent from server in async call on success case
                "Planned" : "Yes",
                "Status" : "Success",
                "Status Code" : 200
            })
        //}, 3000);

        setTimeout(() => {
            reject({ //this out put is assumed to be sent from server in async call on failed case
                "Planned" : "Yes",
                "Status" : "Failed",
                "Status Code" : 404
            })
        }, 2000);
})

console.log(LunchPromise);

LunchPromise.then((data)=>{
                console.log("Promise Call Successful ", data)
            })
            // .then((data)=>{ //second then uses refined data in first then
            //     console.log("Promise Call Successful ", data)
            // })
            .catch((err)=>{
                console.log("Promise Call Failed ", err)
            })

console.log("Promise is proxy!!!");

// LunchPromise.then((data)=>{
//     console.log("Promise Call Successful ", data)
// })
// .catch((err)=>{
//     console.log("Promise Call Failed ", err)
// })


// create a promise object with name student on it after 2 seconds student is pass (resolved case)
// and set status stating learnt es6
// then for rejected case set that status - i am progressing