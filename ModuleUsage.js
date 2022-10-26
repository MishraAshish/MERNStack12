//Two options - using import keyword (ES6), or using require module (commonjs pattern, ES5)

//var userObj = require("./Module");

//var exportedObj = require("./Module");
//var userObj = exportedObj.User;

var { User, aConstant } = require("./Module");

console.log(User.getUserInfo())

User.name = "Paribesh"

console.log(User.getUserInfo())
console.log(aConstant)

// Create Account Module put properties like AcctName, Type, Balance etc and export and use the same by requiring the same