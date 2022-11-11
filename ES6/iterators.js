//Filter, Map, Some and Reduce : Iterators
//Are advanced iterators, always give us a shallow copy of data present and 
//maintain the data immutability whatever change we do to get new collection it will not update in parent collection

let personsList = [
    {id : 1, name : "John", savedby : "CaptainAmerica"},
    {id : 2, name : "Alice", savedby : "IronMan"},
    {id : 3, name : "Roger", savedby : "CaptainAmerica"},
    {id : 4, name : "Adam", savedby : "IronMan"},
    {id : 5, name : "Alex", savedby : "SpiderMan"},
    {id : 6, name : "Robin", savedby : "Thor"}
];

//1. List of the persons saved by CaptainAmerica

let personsSavedByCA = personsList.filter((person)=> person.savedby === "CaptainAmerica")

//console.log(personsSavedByCA);
//console.log(personsList); //in these iterations base list remains intact/ preserving the immutability


//2. Names of persons saved by IronMan - map used to do manipulations within iteration

let nameListSavedByIronMan = personsList.map((obj)=> obj.savedby==="IronMan" ? obj.name : "").filter(p=>p!="")
//console.log(nameListSavedByIronMan);

//console.log(personsList);

let nameListWithDr = personsList.map((obj)=> obj.savedby==="IronMan" ? {"Saved Person" :"Dr. "+ obj.name} : "").filter(p=>p!="")
//console.log(nameListWithDr);


//3. Some is used to iterate and check if the condition we're looking for is present (short circuit)
// any one saved by Thor
let savedByThor = personsList.some(obj=> obj.savedby==="Thor");
//console.log(savedByThor);

let savedByDrStrange = personsList.some(obj=> obj.savedby==="DrStrange");
//console.log(savedByDrStrange);

//4. Count of persons saved by each Super Hero

let countOfPersons = personsList.reduce((prevVal, currVal)=>{
        console.log(prevVal);
        console.log(currVal);
        
        //{}.CaptainAmerica = undefined// false
        //prevVal[{CaptainAmerica: 1}]

        prevVal[currVal.savedby] = prevVal[currVal.savedby] ? prevVal[currVal.savedby] + 1 : 1;

        return prevVal;
    },new Set())//initializing the first prevVal

console.log(countOfPersons);


//Question :
///////////////////////////

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "javascript"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag
//2. List the same on person using java and put programmer after their name, change the name key to Developer
//3. If we have anyone with tag python
//4. Find the number of unique tags and their count present