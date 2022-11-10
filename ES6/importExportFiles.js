// Export and Import keywords are present to use them for given purpose
// a file can have only one export or it can export multiple modules/properties

// a file can have only one default export, mostly/usually that export is of similar name as of file

//Exports 

//constants.js
export let pi = 3.14159; //named export
export let gravity = 9.8; //named export
//export default constant = "MERNStack" //default export - only one from one module/file

//User.js
export default User = {} //this is default export 

//User2.js
export let User = {} //this is default export 


//Imports

//UseModule.js
import constant, { pi, gravity } from "./constants.js"// named exports are imported in curley bracks {}

import User from "./User" //default export don't need to be in curley bracks 

//import User as User2 from "./User2.js" //aliasing the imports

import * as constants from "./constants.js" //import every module from constnats file and the we can use it in our file

console.log(constants.pi)

//we can use destructures to import the exported modules