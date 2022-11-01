// CallBackFunction - when a function is passed as a parameter in any other function, it would termed as callback function
// This function will remain in the entirity of the other functions context

function PrintDetails(name) {
    console.log(name)
}

//GetDetails("Jason") //global context or global this

function GetUserInfo(callBkFunc, name, age, address) {
    //callBkFunc(name + age + address)
    callBkFunc(name )
    callBkFunc( age )
    callBkFunc(address)
}

function GetStudentInfo(callBkPrint,name, session, interest) {
    callBkPrint(name)
    callBkPrint(session)
    callBkPrint(interest)
}

GetUserInfo(PrintDetails, "Uddampreet", 20, "Somewhere on earth")
GetUserInfo(PrintDetails, "Ang Li", 20, "Somewhere in US")

//will always execute in global context - settimeout context
setTimeout(function () {
    PrintDetails("From Timeout CallBack Function")
}, 1000)


// function NewFunction(callBackFunc, param1, param2) { }
function Print(param) {
    console.log("Things that we print - " + param)
}

function Add(printFunc, a, b) {
    var sum = a + b;
    printFunc(sum) // using callback function
}

Add(Print, 5, 6)


// nested functions do hold the scope of outerfunctions variables or properties 
//javascript currying
var e = 15; //global scope 

function sum1(a){

  return function sum2(b){

    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

var sum2 = sum1(5)
var sum3 = sum2(10)
var sum4 = sum3(15)
var endResult = sum4(20)
console.log(endResult)

var eResult = sum1(1)(2)(3)(4)
console.log(eResult)


//we can create nested function using call back
// function sum1(sum2, a){
//     return sum2(a)
    
//   }

//    function sum2(b){
    
//   }

//   return function sum3(c){
//     // outer functions scope
    
//   }

//   return function sum4(d){
//     // local scope
//     return a + b + c + d + e;
//   }