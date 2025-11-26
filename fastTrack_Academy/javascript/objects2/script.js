let person1 = {
  firstName: "Yahye",
  lastName: "Hashi",
  age: 25,
  occupation: "Software Developer",
  walk: function() {
    console.log(this.firstName + " is walking. ")
  },
  jump: function() {
    console.log(this.firstName + " is jumping. ")
  }
};

// console.log(person1["lastName"]);
// person1.walk();
// person1.jump();
delete person1.firstName
console.log(person1);


// let person2 = {
//   firstName: "Ahmed",
//   lastName: "Hassan",
//   age: 27,
//   occupation: "Software Developer",
// };

//  let person3 = {
//    firstName: "Mohamed",
//    lastName: "Abdi",
//    age: 24,
//    occupation: "Doctor",
//  };


//  let person4 = {}
//  person4.firstName = "farhiya";
//  person4.age = 50;
//  person4.lastName = "ahmed" 

//  let person5 = new Object()

// person1.firstName = "mohamed";

 
//  console.log(person1);
//  console.log(person2);
//  console.log(person3);
//  console.log(person4);
//  console.log(person5);






