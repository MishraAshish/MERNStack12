//classes :  classes with syntax similar to java, .net 
//  -- are special type of functions in javascript that give us desired behaviour

// class MyClass{ //uses class keyword
//     constructor(){}//initializa the class object
//     method(){}//functions to provide behaviour that we expect from the class
// }

class Vaccination {
    constructor(name, releaseDate, price ){
        this.VaccineName = name
        this.ReleaseDate = releaseDate
        this.VaccinePrice = price
    }

    getVaccineDetails = function (availability) {
        return {
            Name : this.VaccineName,
            ReleaseDate : this.ReleaseDate,
            Price : this.VaccinePrice,
            Available : availability ? "Yes" : "No"
        }
    }

    getSchedule () {
        return {
            name : this.name,
            place : this.place
        }
    }

    calculateArea = (a,b)=>a*b
}

let VacObj =  new Vaccination("Covishield", "01/01/2021", "$50");
console.log(VacObj.getVaccineDetails(true));


//Question : create a class to calculate area of anything - rectangle, circle, one object of your choice