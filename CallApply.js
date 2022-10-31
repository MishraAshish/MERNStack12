// call and apply are the functions present in any function which will help us to decide the run time context of 
// executing function, this way we can associate any object as the run time context (this)

// call - whenever we need to pass parameter we pass it one by one after the object
// apply - we can pass all the parameters as an array after the object

var user = {name : "Test", interest : "Functional Programming"}
var user2 = {name : "Test Second", interest : "Core Programming"}

//GetDetails();//in a open execution of function its context (this) will always be global

function GetDetails(age, session ) {
    //console.log(this)
    // console.log(this.name)   //this - is an object called as context or scope
    // console.log(this.interest)  
    // console.log(age)  
    // console.log(session)   

    //template literal
    console.log(`
        User Name is - ${this.name}
        User Interest is - ${this.interest}
        User Age is - ${age}
        User Session is - ${session}
    `)
}

GetDetails.call(user, 22, "MERNSTack" ) //changing the context at run time
GetDetails.call(user2, 21, "Dynamic Context!!!" )


GetDetails.apply(user2, [21, "Dynamic Context!!!"] ) // the parameters our function accepts can be passed as array

// Apply : is used the same way call is used but, we can pass the parameters in the form of array
// Apply : is the inbuilt method used to change the context of a function at runtime, but it accepts function parameters in array format

var BMW = {name : "BMW", hatchback : "Yes", price : "2000", openRoof : "Yes"}
var SomeCar = {name : "Toyota", hatchback : "No", price : "1000", openRoof : "No"}

function GetVehicleInfo(authorised, noOfWheels, crashTest, highSpeed, countryMake) {
    console.log(`
        Vehicle Name ${this.name}
        Vehicle hatchback ${this.hatchback} 
        Vehicle price ${this.price}
        Vehicle openRoof ${this.openRoof}
    `)

    console.log(`
        Vehicle authorised ${authorised}
        Vehicle noOfWheels ${noOfWheels}
        Vehicle crashTest ${crashTest}
        Vehicle highSpeed ${highSpeed}
        Vehicle countryMake ${countryMake}
    `)
}


// GetVehicleInfo.call(BMW, "YEs","5","5")
// GetVehicleInfo.apply(BMW, ["Yes","5","4","Yes","US"])

// GetVehicleInfo.apply(SomeCar, ["No","3","4","Yes","Unknown"])

//Print student information using call and apply and try to see how we get these functions executed immediatly


var UserInfo = {
    name : "Jason",
    age : 31,

    getUserInfo : function () {

        console.log(`
            User Name is  - ${this.name}
            User Age is  - ${this.age}
        `)

        setTimeout(function () {
            console.log(`
            User Name is  - ${this.name}
            User Age is  - ${this.age}
        `) 
        }, 2000)
    }
}

UserInfo.getUserInfo()// context of a function is either set by call, apply or bind or is the object over which its executed
//if a function is executed normally func() then its context would be global