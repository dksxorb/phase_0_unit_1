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

//I just did what the console asked for. Initially I made the secret number variable a 1 but when it asked for 7 I switched it to a 7, which I noticed fulfilled the first two requirements.
//I continued by doing the same thing to the password section. However I did have a minor problem with deciding what boolean to create.
//I was stuck at what I should do but it seemed like a pretty free situation so I coded a very simple boolean value and then I changed it to a false boolean value.
//I continued to add the [] to create an array. Then I followed with 4 of the required elements.



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// While I was working on this challenge I had to refer back to my study materials on javascript. Even with the study materials
// I had to use bits and pieces of google to figure out how to apply what I learned. I understood what the questions asked
// but at the same I didn't understand. Sometime what the questions asked for felt a little vague because I wasn't used to 
// javascript terminology. Or I wasn't used to javascript in general. I continued asking myself what's the basics for javascript and
// how are these functions/elements working with one another. I traversed the internet looking for materials that'll give me a better
// idea of how all the javascript elements were working with one another. There's still a lot content that I need to assimilate and get comfortable with.
// I may have studied and gotten somewhat comfortable with the material but I'm nowhere near using javascript efficiently and intelligently.
// I'm still getting used to the concept of objects/functions/methods and I feel these take priority because these are the foundations of javascript.
// I did learn some basic javascript syntax which makes me happy because at least I'm taking steps forward into the javascript jungle.
// I am nowhere near confident when it comes to javascript, hopefully that will not be the case in a couple of days.
// I enjoyed learning everything about javascript and nothing was tedious becasue everything is so new. It's just scary when you start to get into the advanced side of javascript.


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

