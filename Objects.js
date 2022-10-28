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
//console.log(Employee.getSession())
//console.log(User.getSession())
//console.log(User.session)

// console.log("Employee ", Employee.__proto__)
// console.log("User ", User.__proto__)


//3. Merging of objects

// var mergeObj = {User, Address, Product, Shipping} // references keep on updating so not a great way

var obj1 = {name : "MyName", age : 29, salary : 250}
var obj2 = {name : "YourName", address:"New City ", skills : "Javascript"}
var obj3 = {name : "MyName3", session:"MERNStack"}

//var obj4 = {obj1, obj2, obj3} //preserving the immutability
//console.log(obj4);

Object.assign(obj1, obj2, obj3)
console.log(obj1)

// obj2.newSkill = "Objects"
// console.log(obj1)

// console.log(obj2)
// console.log(obj3)

//4. Even the empty object will have prototype

var emptyObj = {} //Object.create({})
//console.log(emptyObj.__proto__)


//5. if we wish to break the prototype chain
//you need to pass null in your object create constructor

var nullProtoype =  Object.create(null);

//console.log(nullProtoype.__proto__)