let firstName = "john";
let age = 30;
let isMarried = false;

let firstNames = ["ciise", "mohamed", "nimco"];
// this is a data structure bc it holds more than one value
//arrays and objects are data structures
let ages =[30, 25, 32];
let isMarrieds =[true, false, true];

console.log(firstNames[0]); // accessing rule 1
// fistNames is an array so we can only use [ ] to access it

firstNames.push("zakariye");
//inserting rule 2 adding at the back
console.log(firstNames);
firstNames.unshift("seynab"); //inserting in the front
console.log(firstNames);
firstNames.pop() //removing from the back  
//rule 3
console.log(firstNames);

if (firstNames.includes("ahmed")){
console.log(" it exists");
} else {
    console.log("nope");
}
// finding rule 4

//sorting is rule no.5
firstNames.sort();
console.log(firstNames);
// Sort alphabetically
firstNames.sort().reverse();  // for reverse alphabetical
console.log(firstNames);