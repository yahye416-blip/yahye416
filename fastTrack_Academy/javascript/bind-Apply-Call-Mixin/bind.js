// // bind creates a new function with a fixed value of this.
// const person = {
//   name: "Alice",
//   greet: function() {
//     console.log(`Hello, I'm ${this.name}`);
//   }
// };

// const anotherPerson = { name: "Diana" };

// const greetDiana = person.greet.bind(anotherPerson);

// greetDiana();
// // Output: Hello, I'm Diana



class Button {
  constructor(label) {
    this.label = label;
  }

  click() {
    console.log(`Button ${this.label} clicked`);
  }
}

const button = new Button("Save");

// Passing method as callback:
setTimeout(button.click, 1000); // ❌ 'this' lost → undefined

setTimeout(button.click.bind(button), 1000); // ✅ works fine

