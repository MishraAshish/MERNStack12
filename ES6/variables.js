//ES5 - released in 2009 and works on ecmascript base standards also called plain javascript, vanila javascript
//ES6 - released in 2015 and support ecmascript 6 standards to give us advance features closer to class based progm lang

//ES5 - var : functional scope hoisted variable
//ES6 - let and const : block scoped variables or lexical variables

//console.log(myLet_1); //Cannot access 'myLet_1' before initialization; Hoisting is not present in let and const

//1. var is a functional scope, let and const are block scope (lexical scope) and doesn't support hoisting
// function name(params) {
//     var myVar = "SomeValue"
// }
// {
//     var myVar = "SomeValue"
//     let myLet = "New Value"
//     const myConst = "New Value Const"

//     console.log(myLet);
//     console.log(myConst);
// }

// console.log(myVar);
// // console.log(myLet);
// // console.log(myConst);

// //2. we can declare and assign var multple times, however let can be declared only once and can be assigned multiple times
// // whereas const needs to be defined and declared at the same time and can't be reassigned again

// var myVar_1 = "First Value"
// console.log(myVar_1)

// let myLet_1 = "First Value Let"
// console.log(myLet_1)

// //var myVar_1 = "First Value Again"
// //let myLet_1 = "First Value Let"; // re-declaration is not allowed for let and const

// myLet_1 = "First Value Let Re-assigning the value"

// console.log(myLet_1)

// //3. We can't even re-assign the value to const as it is a constant

// const myConst = "First Value Constant"

// //myConst = "Second Value Constant"; //Assignment to constant variable. - not allowed

// let myLet_2;
// myLet_2 = "new value let";
// console.log(myLet_2);

// //const myConst_2; // we need to assign a value as soon as we declare const
// //myConst_2 = "constant value"


// //For objects value can be updated for their reference, however we can't update the object

// const User = {name : "Uddampreet", address : "Somewhere in US" }

// //const User = {name : "Uddampreet", address : "Somewhere in US" }
// //User = {name : "Paribesh", address : "Somewhere in US" }

// User.name = "Tegdeep"
// User.address = "Somewhere on earth"

// console.log(User)

//Problem with functional scope variable

for (var index = 0; index < 5; index++) {
    
    //(function Exec(val) { //using iife to execute immediately and evaluate the value
        setTimeout(function () {
            console.log(index)    
        }, 1000)
    //})(index)
}
console.log(index);

//ES6 - is solving problem with block scope variable let
for (let i = 0; i < 5; i++) {
        //let myVal = arr[i]
        //Object.key
        
        setTimeout(function () {
            console.log(i)    
        }, 1000)
}
//console.log(i);