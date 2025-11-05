// apply() Lets you set this.

// Passes arguments as an array or array-like object.
const person = {
  name: "Alice",
  greet: function(city, country) {
    console.log(`Hello, I'm ${this.name} from ${city}, ${country}`);
  }
};

const anotherPerson = { name: "Liibaan" };

person.greet.apply(anotherPerson, ["Mogadishu", "Somalia"]);
//used same as call but "Mogadishu", "Somalia" have to be in [ ]
// Output: Hello, I'm liban from Mogadishu, Somalia
//person.greet.call(person, "london", "uk");
