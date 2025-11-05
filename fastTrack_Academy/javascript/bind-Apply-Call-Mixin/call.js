const person = {
  name: "Alice",
  greet: function(city, country) {
    console.log(`Hello, I'm ${this.name} from ${city}, ${country}`);
  }
};

const anotherPerson = { name: "Liibaan" };

person.greet.call(anotherPerson, "Mogadishu", "Somalia");
// Output: Hello, I'm liban from Mogadishu, Somalia
//person.greet.call(person, "london", "uk");
