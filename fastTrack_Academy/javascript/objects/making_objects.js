//  person1 {
//  let firstname = "john doe";
//  let age = 26;
//  let city = "London";
//  let favoritecolor ="blue";
//  }

//  person2 {
//  let firstname = "jane smith";
//  let age = 27;
//  let city = "Liverpool";
//  let favoritecolor ="purple";
//  }

 // this is what happens when we convert the data above to JavaScript Objects
const person1 = {
  firstName: "John Doe",
  age: 26,
  city: "London",
  address: {
    street : "784 st",
    postcode :"905 gtt"
},
  favoriteColor: "Blue",
hobbies:["chess" , "walking" , "reading"]
};

const person2 = {
  firstName: "Jane Smith",
  age: 27,
  city: "Liverpool",
  address: {
    street : "123 st",
    postcode :"455 gh5"
},
  favoriteColor: "Purple",
hobbies:["coding" , "gym" , "hiking"]
};

 //console.log(person1.firstName);    //output : only shows "John Doe"
 //console.log(person2.age);      //output : only shows 27
 //console.log(person2.address.postcode); //  output : only shows 455 gh5
 //console.log(person2.hobbies[1]);   //output : only shows "gym"

 // to modify data
  //person1.hobbies[1]="sleeping"    // changes walking to sleeping
 //console.log (person1.hobbies);   // output : shows the modified array
 //delete person1.firstName
 //console.log(person1);    // output deletes the key "firstName"


 let person3 = { };
 person3.firstName = "bob";
 person3.age = "40";
 person3.city ="dublin";
// console.log(person3);
 // another way of making a javascript object

 let person4 = new Object() ;
 person4.firstName = "Alice";
 person4.age= 22;
 person3.city ="cairo";
 console.log(person1, person2, person3 ,person4);
 // another way of making a javascript object