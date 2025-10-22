let numb= [10,20,30,40,50];
let sum=numb.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log("The sum is: " + sum); // The sum is: 150

// console.log(numb.reverse()); // [ 50, 40, 30, 20, 10 ]

// let doubled=numb.map(function(x) {
//     return x * 2;
// });
// console.log(doubled); // output  [ 20, 40, 60, 80, 100 ]

// let filtered=numb.filter(function(x) {
//     return x > 25;
// });
// console.log(filtered); // output [ 30, 40, 50 ]

// let filtered=numb.filter(function(x) {
//     return x < 25;
// });
// console.log(filtered); // output [ 10, 20 ]

// let sum=numb.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 369);
// console.log("The sum is: " + sum); // The sum is: 519 (369 + 150 from the array elements)
