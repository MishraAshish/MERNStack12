//Like other programming language we have operators in javascript as well

//&& (and), || (or), !(not), >, <, =, ==, ===, => ....

var validVoter = true;
var voterAge = "18";

//console.log(parseInt(voterAge)); //convert string into number // isNaN - parses and returns if its a valid number
//if (validVoter && voterAge == 18) {
if (validVoter && Number.isInteger(voterAge) && voterAge >= 18) {    
    console.log("Valid Voter and can vote")
} else {
    console.log("InValid Voter and can't vote")
}


//Ternary Operator
// condition/'s ? "True Case" : "False Case"

validVoter && Number.isInteger(voterAge) && voterAge >= 18 ? console.log("Valid Voter and can vote") : console.log("InValid Voter and can't vote");