function listNames(){
let names =["fadumo", "fartun", "farax"];
console.log(names[0])
console.log(names[1])
console.log(names[2])
}
listNames();


function* listNames() {
  let names = ["fadumo", "fartun", "farax"];
  yield names[0];
  yield names[1];
  yield names[2];
}
//the * indicates a generator function 
// Using the generator
const generator = listNames();

console.log(generator.next().value); // "fadumo"
console.log(generator.next().value); // "fartun"
console.log(generator.next().value); // "farax"
console.log(generator.next().done); //true
