// let boyStudents = ["Bob", "Charlie", "David"];
// let girlStudents = ["Eve", "Faduma", "Fardosa"];
// let allStudents = [...boyStudents, ...girlStudents];
// console.log(allStudents);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combined = { ...obj1, ...obj2 };
console.log(combined);
// { a: 1, b: 2, c: 3, d: 4 }
