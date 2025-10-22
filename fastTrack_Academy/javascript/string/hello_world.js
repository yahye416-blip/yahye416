let str= "Hello, World!";
//console.log(str.length); // Output: 13
// console.log(str.charAt(0)); // Output: H
// console.log(str.indexOf("W")); // Output: 7
// console.log(str.toUpperCase()); // Output: HELLO, WORLD!
// console.log(str.toLowerCase()); // Output: hello, world!
 //let newStr = str.replace("World", "JavaScript");
 //console.log(newStr); // Output: Hello, JavaScript!
 //console.log(str.valueOf()); // Output: Hello, World! -returns primitive value of str.
// console.log(str.split(", ")); // Output: [ 'Hello', 'World!' ]
// console.log(str.trim()); // Output: Hello, World! -gets rid of whitespace
 //console.log(str.repeat(3)); // Output: Hello, World!Hello, World!Hello, World!
//console.log(str.startsWith("Hello")); // Output: true
// console.log(str.endsWith("!")); // Output: true  
//console.log(str.includes("Java")); // Output: false
// console.log(str.concat(" Welcome to string manipulation.")); 
// // Output: Hello, World! Welcome to string manipulation.// Additional string methods demonstrated in this file.
//console.log(str.padStart(20, '*')); // Output: *******Hello, World! 
// console.log(str.padEnd(20, '-')); // Output: Hello, World!-------       
// console.log(str.search("World")); // Output: 7
 //console.log(str.slice(7, 12)); // Output: World -shows u characters from index 7 to 12
//console.log(str.substring(0, 5)); // Output: Hello -extracts characters from index 0 to 5
 //console.log(str.match(/o/g)); // Output: [ 'o', 'o' ]// End of additional string methods demonstration.
 // The g flag returns all matches instead of stopping at the first match.
// let word="taramasalata";
 //console.log(word.match(/a/g)); // Output: [ 'a', 'a', 'a', 'a', 'a', 'a' ]

 // repeat
 let phrase = "Na ";
 console.log(phrase.repeat(5)); 
 // Output: Na Na Na Na Na 
 let phrase2 = "Na \n";
 console.log(phrase2.repeat(5)); 
 // Output: Na repeated 5 times on new lines