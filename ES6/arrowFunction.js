// arrow functions or fat arrow functions are lambda expressions that help us with below stuffs
// 1. Ease of writing a function - ()=>{}
function add(a,b) { 
    return a+b
}

let AddArrow = (a,b)=>a+b; //return keyword can be ignored when we dont need multiple lines for manipulation

let AddArrow1 = (a=0,b=0)=>{
       let myCoefficient = 1.5;
       return myCoefficient+a+b
    };
// console.log(add(5,8));
// console.log(AddArrow(5,8));
// console.log(AddArrow1(5,8));

// 2. Resolving the context of child functions/callbacks by copying context of immediate parent
let Employee = {
    name : "Tegdeep",
    place : "Bay Area, US",
    printEmpName : function(){
        //console.log(this);//context of current function
        console.log(`Name is - ${this.name}`)

        setTimeout(function () {
            console.log(`Name is - ${this.name}`)
        }.bind(this), 3000) // same context as parent (Employee) has been passed to callback function

        //resolving the context by copying context (this) to that and then use it
        let that = this; // a hack and a popularly used hack to pass the context
        setTimeout(function () {
            console.log(`Name is - ${that.name}`)
        }, 3000)

        //does the job of bind by resolving the context
        setTimeout(()=>{
            console.log(`Arrow Name is - ${this.name}`)
        }, 4000)
    }
}
Employee.printEmpName();


// Create a Student Object with a couple of properties and a function - printStudent, implement arrow function in setTimeout