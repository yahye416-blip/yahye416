//JavaScript call stack
//
//How it works:
//JavaScript is single-threaded, meaning it runs one thing at a time.
//Every time a function is called, a new stack frame is added ("pushed") to the call stack.
//When that function finishes, it’s removed ("popped") from the stack.
// function first() {
//   console.log("First");
//   second();
//   console.log("End of first");
// }

// function second() {
//   console.log("Second");
// }

// first();
//output 
 //First
//Second
// End of first





//example 2

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");
//output    1   4   3   2