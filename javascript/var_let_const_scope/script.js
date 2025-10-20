var firstName = "yahye"
console.log(firstName);   //output  yahye
{
console.log(firstName);   
}
// OUTPUT  yahye yahye  bc var works in the global scope and the local scope

let first1Name = "yahye1"
console.log(first1Name);   //output  yahye1
{
console.log(first1Name);   
}
// OUTPUT  yahye1 yahye1  bc let works in the global scope and the local scope

// if we switch " console.log(firstName);   "  with   the lines outside the local function scope " let first1Name = "yahye1" console.log(first1Name); "   we get an error
// "let" only exists in the scope u create it

const lastname = "hashi"
//lastname = "hussein"
console.log(lastname);
// output : hashi
// const cant be reassigned
// if line 19 is uncommented we get an error