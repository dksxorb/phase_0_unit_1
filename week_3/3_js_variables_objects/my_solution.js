// I paired [by myself, with:] on this challenge.




// Pseudocode
// assign integer value for variable 'secretNumber'
// reassign integer value of 7 to variable 'secretNumber'
// assign string value for variable 'password'
// assign string value of "just open the door" for variable 'password'
// assign boolean value for variable 'allowedIn'
// reassign boolean value of false for variable 'allowedIn'
// create an empty array for variable 'members'
// push string element "John" into array variable 'members'
// push 2 more elements(numbers,string,etc.) into array variable 'members'
// push a final string element "Mary" nto array variable 'members'


// __________________________________________
// Write your code below.

var secretNumber = 7
var password = "just open the door"
var allowedIn = (10 < 9) 
var members =["John", 1, 2, "Mary"]


// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 





// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// 
// 
// 
// 
// 


// __________________________________________
// Driver Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

