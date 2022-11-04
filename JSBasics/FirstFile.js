console.log("This is the first code like - Hello World");

PrintName("MERNStack - is the session name!!") //due to hoisting i it will execute before definition
PrintName("MeheJabeen")
PrintName("Ang Li")

//Function - are first class member citizens of Javascript
function PrintName(name) {
    console.log(name);//context or execution context (this - keyword)
}

var name = "A"
var name = "B"


//Class - Some Purpose
// class Human { //Employee, Student, Scientist ---
//     //Method - Behaviour
//     GetName()// Should Be Common
// }