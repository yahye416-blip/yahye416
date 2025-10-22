// let name1="abdisamad";
// let name2="liban";
// let name3="nimcaan";
// let name4="ayaan";
// let name5="fartun";
// console.log(name1);
// console.log(name5);

let names=[ "abdisamad","liban","nimcaan","ayaan","fartun"];
names[0]="abdilaahi"; //changing abdisamad to abdilaahi
// console.log(names[0]); //abdilaahi is at index 0
//names[5]="zakaria"; //adding new value at index 5, index 5 did not exist before
console.log(names);

// names.unshift("xasan"); //adds new value at the beginning of the array, now index 0 is xasan and abdilaahi is at index 1
// names.shift(); //removes the first value of the array, now abdilaahi is back at index 0

// names.push("zakaria"); //also adds new value at the end 
// names.pop(); //removes the last value at the end

//names.fill("waryaa",1,4); //fills the array from index 1 to index 4 with the value "waryaa"
// output will be ["abdilaahi","waryaa","waryaa","waryaa","fartun"]

//names.forEach((x) => console.log(x + " is cool")); //prints each value in the array one by one

// names.sort(); //sorts the array in alphabetical order
// // output will be ["abdilaahi","ayaan","fartun","liban","nimcaan"]

//names.reverse(); //reverses the order of the array
// output will be ["fartun","nimcaan","liban","ayaan","abdilaahi"]

//console.log(names.includes("mohamed")); //checks if the array includes the value "mohamed", output will be false

let namesstring=names.join(", "); //joins all the values in the array into a single string separated by ", "
console.log(namesstring); //output will be "abdilaahi, liban, nimcaan, ayaan, fartun"
// instead of    [ 'abdilaahi', 'liban', 'nimcaan', 'ayaan', 'fartun' ]

