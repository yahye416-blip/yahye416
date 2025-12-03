const nameNotFound = new Error("the name of the user cannot be found");

try {
  let ali;
  console.log("Hello, world!");
//   throw nameNotFound;
  console.log(true);
  console.log([1, 2, 3]);
  console.log({ name: "Alice", age: 25 });
  console.log("Sum:", 5 + 7);
  console.log("Current time is:", new Date());
  console.log("Random number:", Math.random());
  console.log("Uppercase:", "hello".toUpperCase());
  console.log("User:", { id: 1, username: "coder123" });
} catch (error) {
  console.log("an Error has happened and it was handled");
  console.log(error.message);
}
finally {
    console.log("i am guranteed to run whether there is an error or not")
}