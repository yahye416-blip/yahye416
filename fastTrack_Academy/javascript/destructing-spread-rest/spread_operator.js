//Copying an array
// loooooong way to copy
// const numbers = [1, 2, 3];
// const copy = [numbers[0], numbers[1], numbers[2]];
// console.log(copy); // [1, 2, 3]

//faster way
// const numbers = [1, 2, 3];
// const copy = [...numbers];
// console.log(copy);         // [1, 2, 3]
// if we dont put ... before numbers we get [ [1,2,3] ]


//Merging arrays
// const a = [1, 2];
// const b = [3, 4];
// const merged = [...a, ...b];
// console.log(merged); // [1, 2, 3, 4]


//Adding new elements to an array
// const numbers = [2, 3, 4];
// const extended = [1, ...numbers, 5];
// console.log(extended); // [1, 2, 3, 4, 5]


//Merging objects
// const person = { name: 'Ali' };
// const details = { age: 25, country: 'Somalia' };
// const merged = { ...person, ...details };
// console.log(merged); // { name: 'Ali', age: 25, country: 'Somalia' }


//Updating object properties
// const person = { name: 'Ali', age: 25 };
// const updated = { ...person, age: 26 };
// console.log(updated); // { name: 'Ali', age: 26 }


//Using spread in function arguments
function sum(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(sum(...nums)); // 6

// spreading strings
// let myname = "yahyehashi"; 
//  let letter = [...myname]; 
// console.log(letter);    // ['y', 'a', 'h', 'y', 'e', 'h', 'a', 's', 'h', 'i']