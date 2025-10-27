// // JavaScript ‘for...in’ loop is only used for objects, it loops loops through the properties of an object:-
// const user = {
//   username: "john_doe",
//   email: "john@example.com",
//   age: 28
// };

// for (let key in user) {
//   console.log(`${key}: ${user[key]}`);
// }
// // output 
// //username: john_doe
// //email: john@example.com
// //age: 28

// // for...in   but looking for specifics
// const settings = {
//   theme: "dark",
//   notifications: true,
//   language: "en"
// };

// for (let key in settings) {
//   if (key === "notifications") {
//     console.log("Notifications setting found!");
//   } if (key === "theme") {
//     console.log("Theme setting found!");
//   } if (${user[key]} === "en") {
//     console.log("Language setting found!");
//   }
// }
// // output:Notifications setting found!



// // The ‘for...of’ statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables:-
// const fruits = ["apple", "banana", "cherry"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }
// //output: 
// //apple
// //banana
// //cherry

// const word = "hello";

// for (let letter of word) {
//   console.log(letter);
// }
// output
//h
//e
//l
//l
//o

// const numbers = new Set([10, 20, 30]);

// for (let num of numbers) {
//   console.log(num);
// }
// output
//10
//20
//30
