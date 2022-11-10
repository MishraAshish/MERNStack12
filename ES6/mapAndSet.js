//Special kind of Collection Created in ES6 to set iterables even with non primitive key's unlike other collections(json)
//Allows us to use a lot of methods to get, set, delete and do other operations without much pain
//remembers insertion order so the fetch is always easy compared to any other collection

//[{key : "value"}]
let myMap = new Map();

let keyString = 'a string', keyObj = {}, keyFunc = function() {}, keyNum = 2000;

myMap.set(keyString, "This is a string key")
myMap.set(keyObj, "This is a object {} key")
myMap.set(keyFunc, "This is a function key")
myMap.set(keyNum, "This is a string key")

//console.log(myMap.entries());
console.log(myMap.get(2000))

console.log(myMap.get({}))
console.log(myMap.get(keyObj)) //try this for functions

console.log(myMap.delete(keyNum))
console.log(myMap.has(2000))

console.log(myMap.entries());


//when we need a iterable/collection with unique values
//Set : this maintains a set of unique collection with additional properties and methods like map

let StudentSet = new Set(["Ang li","Jason", "MeheJabeen", "Tegdeep", "Uddampreet", "Paribesh", "Yaodong", "Lyuin"])

console.log(StudentSet.entries())
console.log(StudentSet.add("Jason"))//no duplicate values are added

//console.log(StudentSet.entries())

console.log(StudentSet.size)