//myGlobal = undefined //initilizes with default - undefined
//MyFunc = definition //initilizes with default - undefined

//Hoisting - is a phenomenon where JS compiler reads all variables and functions pulls them on top of file or function
// assigns them respective default values, that way we can access the variable/function even before its declaration
// a reason to say javascript is a compiled language

//1.  creates the snapshot on top of the file and function
//2.  variables - undefined
//3.  functions - function definition

//Global and Local - Variables/Scope
//globalThis.myGlobal = "global Ang Li"
//myGlobal = "global Ang Li"

//console.log(myGlobal) //undefined
//console.log(MyFunc()) // hoisted with its function definition so we can execute

//
//console.log(funcExpression) //undefined
//console.log(funcExpression(5,5)) //10, undefined

var myGlobal = "global Ang Li"

var hoistTest = 26;
var newVarible = 27;

MyFunc();
function MyFunc() {
    //hoistTest - undefined
    console.log(hoistTest)

    console.log(newVarible);
    var hoistTest = 25;

    console.log(hoistTest)

}

// function MyFunc() {
//     console.log(hoistTest)
    
//     var hoistTest = 25;
//     var localExmp = "Variable is local to the function"

//     console.log(hoistTest)


//     return localExmp;
// }


var funcExpression = function(a, b) {
    return a + b;
}

//console.log(funcExpression(5,5))
