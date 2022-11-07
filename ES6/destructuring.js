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

let [first, second, third, four = "Default value"] = ["Jason"];
console.log(first)
console.log(second)
console.log(third)
console.log(four)


//3. 