//When we have need to generate html, write too much of information to concatenate, in that case handling with
//"", or '' is a tough thing, so we've backtick ( `` ) or template literals helps doing easily

const AnimalSoundsES6 = require("./shortHand");
let dynVal = 20222022;

let myNormalString ="Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                    "\n Lorem Lipsum Lorem Lipsum "+dynVal+" Lorem Lipsum" +
                    "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                    "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                    "<h1>Header<h1>"+
                    "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum \n"+
                    JSON.stringify(AnimalSoundsES6);

//console.log(myNormalString);


let templateLit = `Lorem Lipsum Lorem Lipsum Lorem Lipsum
                    Lorem Lipsum Lorem Lipsum ${dynVal} Lorem Lipsum
                    Lorem Lipsum Lorem Lipsum Lorem Lipsum
                                 
                    Lorem Lipsum Lorem Lipsum Lorem Lipsum
        <h1>Header<h1>
                    Lorem Lipsum Lorem Lipsum Lorem Lipsum
                    ${JSON.stringify(AnimalSoundsES6)}`

console.log(templateLit);