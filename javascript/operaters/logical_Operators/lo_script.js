//Logical Operators
//Logical operators are used to combine boolean expressions.

//Logical operators can be used to modify the results of comparisons.

//Typically, you will use a comparison operator to check a condition, and a logical operator to combine conditions into more complex logic.



//The && operator returns true if both expressions are true, otherwise false 

let x = 10;
let y = 5;

console.log(x > 5 && y < 10); // output should be true bc both conditions are true)

console.log(x < 5 && y < 10); // output should be false bc one of the conditions ( the 1st one) is false

console.log(x > 5 && y > 10); //output should be false bc one of the conditions ( the 2nd one) is false

console.log(x < 5 && y >10); //output should be false bc both conditions are false





// Logical OR (||)

// Returns true if at least one operand is true.

var isAdmin = false;

var isEditor = true;

console.log(isAdmin || isEditor); //True(one of them is true)

//if true || true then true

//if true || false then true

//if false || true then true

//if false || false then false



//NOT   (  !  )

// !TRUE == FALSE

// !FALSE == TRUE