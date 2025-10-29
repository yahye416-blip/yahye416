// let multiply2 = function (num1,num2){
//     return num1*num2
// };
// let result =multiply2(3,30);
// console.log(result);

// function multiply(num1,numb2){
//     return numb1 * numb2
// };

// let multiply2 = (num1, num2) => num1 * num2;
// let result =multiply2(3,55);
// console.log(result);
// this is an arrowed function of line 1 to lin 5

// let multiply8 = num3 => num3*8;
// let result8 =multiply8(8);
// console.log(result8);
// no need for brackets if there is one parameter

// const greet =(firstname) => console.log(`hello! ${firstname}`);
// greet("mohamed"); // Output: Hello!
// 



// setTimeout & setInterval simplified
// let timer = setInterval(() => console.log("yahye"), 3000);
//  setTimeout(() => clearInterval(timer),10000);
// Stop the interval after 10 seconds


// map
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(n => n * 2);
// console.log(doubled); // Output: [2, 4, 6, 8]
// Arrow Functions in Callbacks


// let student = ["yahye", "mohamed", "deeqa", "faadumo"];
// let capped = student.map(name => name.toUpperCase());
// console.log(capped);
//map but with strings


let students = ["yahye", "mohamed", "deeqa", "faadumo"];
let capitalized = students.map(name => 
  name.charAt(0).toUpperCase() + name.slice(1)
);
console.log(capitalized);
//only capitalizes the first letter

