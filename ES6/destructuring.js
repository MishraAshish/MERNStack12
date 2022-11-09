//Helps us not creating variables on big scale
// let studentArr = ["student one", "student two", "student three"];
// let first = studentArr[0]
// let second = studentArr[1]

//a. Array Destructuring
//1. declaration reduction
// let [first, second, third, four] = ["student one", "student two", "student three"];
// console.log(first)
// console.log(second)
// console.log(third)
// console.log(four)

//2. do defaulting of variables

// let [first, second, third, four = "Default value"] = ["Jason"];
// console.log(first)
// console.log(second)
// console.log(third)
// console.log(four)


//3. rest of remaining values

// let [first, second, third, ...restOfTheValues] = [1,2,3,4,5,6,7,8,9];
// console.log(first)
// console.log(second)
// console.log(third)
// console.log(restOfTheValues)

//rest element must be the last in destructing pattern
//let [first, ...second, third, last] = [1,2,3,4,5,6,7,8,9];

//4. swapping of variables

// let first = "one", second = "two";

// [first, second] = [second, first]

// console.log(first)
// console.log(second)


//b. Object Destructuring

//1. Normal object destructuring
let User = { name : "Tegdeep", session : "MERNTStack", interest : "Vlogger" }

//let Name = User.name
//let session = User.session
//let productName = Product.name

let {name, interest, productName = "IPhone 12"} = User; 
console.log(name, interest, productName);


//2. Nested Object destructuring

let StudentReport = { stdname : "Ang Li", address : "Somewhere in US", topics : { Math : 85, Physics : 90, Chemistry : 80 } }

let {stdname, topics : { Physics , Chemistry, InformationTech = 75} } = StudentReport;

console.log(stdname);
console.log(Physics);
console.log(Chemistry);
console.log(InformationTech);

