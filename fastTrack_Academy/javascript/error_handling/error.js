// console.log("adam");
// console.log("ahmed");
// console.log("ciise");
// console.log("muuse");
// console.log("ilyas");

//output should be 5 consoles and code=0 in ?? Seconds



// let firstname; //if i uncomment this it shows undefined but it still runs the code
// console.log("adam");
// console.log("ahmed");
// console.log("ciise" + firstname);
// console.log("muuse");
// console.log("ilyas");
//output error and it will tell u where the error is


// comment out everything above


// try {
// let firstname;
// console.log("adam");
// console.log("ahmed");
// console.log("ciise" + firstnam);
// console.log("muuse");
// console.log("ilyas");
// } catch(error) {
// console.log("an exception has been caught,pls fix")
// }
// output "adam""ahmed""an exception has been caught,pls fix" bc of the spelling error



// comment out everything above


// try {
// let firstname ;
// console.log("adam");
// console.log("ahmed");
// console.log("ciise" + firstname.toUpperCase());
// console.log("muuse");
// console.log("ilyas");
// } catch(error) {
// console.log(error.message)
// }
//output will explain the error



// comment out everything above


try {
let firstname = "john";
console.log("adam");
console.log("ahmed");
throw new Error("cillad baa jirta")
console.log("ciise" + firstname);
console.log("muuse");
console.log("ilyas");
} catch(error) {
console.log(error.message)
} finally {
console.log("finally block");
}
// output adam,ahmed,cillad baa jirta
// if we throw , nothing after it runs

// syntaxError means spelling error