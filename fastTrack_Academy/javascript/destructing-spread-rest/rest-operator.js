// // rest with specific parameters
// function show(first, second, ...others) {
//   console.log(first);   // 'a'
//   console.log(second);  // 'b'
//   console.log(others);  // ['c', 'd', 'e']   new array is created but it cant be accessed outside the scope
// }
// show('a', 'b', 'c', 'd', 'e');




// //Object destructuring with rest

// const person = {
//   firstName: 'Ali',
//   age: 25,
//   country: 'Somalia',
//   city: 'Mogadishu'
// };
// const { firstName , ...rest } = person;
// console.log(firstName); // 'Ali'
// console.log(rest); // { age: 25, country: 'Somalia', city: 'Mogadishu' } 


// // combining spread with rest
const team = ['Ali', 'Fatima', 'Omar'];
const newTeam = ['Aisha', ...team, 'Yusuf'];  //spread
console.log(newTeam); // ['Aisha', 'Ali', 'Fatima', 'Omar', 'Yusuf']
const [leader, ...members] = newTeam;
console.log(leader);  // 'Aisha'  bc leader is at [0] 
console.log(members); // ['Ali', 'Fatima', 'Omar', 'Yusuf']

