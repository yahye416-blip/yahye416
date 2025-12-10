let person1 = {
  name: "Alice",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
};
// console.log (person1.name);
// console.log (person1.address.city);
// console.log(person1["name"]);
// console.log(person1["age"]);

// Destructuring assignment
let { name, age, address } = person1;
// console.log(name); // Alice
// console.log(age);
// console.log(address.city); // New York

let students = ["Bob", "Charlie", "David"];
// console.log(students[0]); // Bob
// console.log(students[1]); // Charlie
let [a, b, c] = students;
console.log(a); // Bob
console.log(b); // Charlie
console.log(c); // David