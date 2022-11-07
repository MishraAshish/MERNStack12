// If my key value (that i am reading from any variable) are same then instead of having both of them we can have only one

let cat = "Miaow", // if we put comma we don't need to use let again and it will continue as let till semicolon ;
dog = "Woof",
bird = "Chrip",
lion = "roar";

let AnimalSounds = {
     cat : cat,
     dog : dog,
     bird : bird,
     lion : lion
}

//console.log(AnimalSounds)

//shorhand in ES6
let AnimalSoundsES6 = {
    cat,
    dog,
    bird,
    lion
}

//console.log(AnimalSoundsES6)

// console.log("Animal sounds are - ", AnimalSoundsES6)

// console.log("Animal sounds are - "+ AnimalSoundsES6)//toString() will give - [object Object]

// console.log("Animal sounds are - "+ JSON.stringify(AnimalSoundsES6))

module.exports = AnimalSoundsES6;