//Objects : Are the basics building blocks in Javascript with many predefined functions to be used at various fetures
//Objects mainely are key value pair and can be used to create a class structure

//Creating an object
// new Object({}), Object.create({})
var User = {
    name : "Paribesh",
    address : "Somewhere in US",
    getUserDetails : function () {
            return {
                name : this.name,
                address : this.address 
            }
    }
}
//console.log(User.getUserDetails())

//Inheritance of JS Object
//1. Using new keyword
// var Employee = new Object(User); //Employee is Child of User

// Employee.session = "MERNStack";
// Employee.getSession = function () {
//     return this.session + " " +this.address;
// }
// console.log(Employee.getSession())
// console.log(User.getSession())

//2. Object.Create - creates a new object by copying the properties and function of parent using - protoype chain
var Employee = Object.create(User); //Employee is Child of User

Employee.session = "MERNStack";
Employee.getSession = function () {
    return this.session + " " +this.address;
}
console.log(Employee.getSession())
//console.log(User.getSession())
console.log(User.session)