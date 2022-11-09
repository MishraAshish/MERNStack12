//Spread : is used to spread the elements of any object or array to be used one by one

// let arrayOFCities = ["Rome", "New York", "New Delhi", "London"];

// console.log(arrayOFCities[0]);
// console.log(arrayOFCities[1]);


// console.log(...arrayOFCities);//spread operator

// //spread operator is used to combine two objects and preserve the immutability of each object
// let User = { name : "Jason", age : 25 }
// let Address = {home : "Somewhere in US", office : "Virtual"}

// //let Employee = {User , Address} //Question : Do it with Object.assign

// let Employee = { ...User, ...Address}
// console.log(Employee);

// User.session = "MERNStack"
// console.log(Employee);
// console.log(User);

// //using spread to pass parameters

// function Sum(a = 0, b = 0, c = 0) {
//     return a+b+c;
// }

// let nums = [5826,5656,26565]

// console.log(Sum(nums[0], nums[1], nums[2]))
// console.log(Sum(...nums))

// console.log("using apply " + Sum.apply(null, nums))


// let Accounts ={
//     accountHolderName : "Tohney",
//     balance : "$6000",
//     address : {
//         address1 : "address1",
//         address2 : "address2"
//     }
// }

// //let PurhaseOrder = {Accounts,  DeliveryAddress : "address3"};
// let PurhaseOrder = {...Accounts,  deliveryAddress : "address3"};
// //console.log(PurhaseOrder)

// Accounts.accountHolderName = "Toan";
// //console.log(PurhaseOrder)


//Rest Parameter : Rest Parameters are used to accept the number of parameters dynamically as last parameter

//function SumLarge(a, b, ...restparam) {
    //console.log(a, b, restparam)
//}
//SumLarge(1,2,4,56,7,7,78,9)

function SumLarge(...restparam) { //always be the last parameter
    //console.log(...restparam);//array of parameters
    let sum = 0;
    //reduce - iterator is used to iterate over array and keeps the last updated value
    
    sum = restparam.reduce((prevVal, currVal, currIndex, array)=>{
        console.log(`prevVal ${prevVal}`)
        console.log(`currVal ${currVal}`)
        console.log(`currIndex ${currIndex}`)

        return prevVal + currVal; //this will be the previous value
    }, 0) //initialization of prevVal
    return sum;
}
let arrNums = [1,2,3,4,5,6]
console.log(SumLarge(...arrNums))

//Questions :
//Spread Operator - 
//create a list of vaccines and print
//create doctor object and print his qualifications and other details using spread
//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread


//Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers
