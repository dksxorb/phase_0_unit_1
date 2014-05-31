// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Edward Kim
//  2. Ori Jonathan Pleban


// 0. "YOU SIGNED... WHO?!"

  //Name: Idris Elba
  //Age: 41
  //Quote: "We're cancelling the apocalypse!"
  var idris = {
    name: "Idris Elba",
    age: 41,
    quote: "We're cancelling the apocalypse!"
  };
  
  //Name: Liam Neeson
  //Age: 61
  //Quote: "I will find you. And I will kill you."
  
  var liam = {
    name: "Liam Neeson",
    age: 61,
    quote: "I will find you. And I will kill you."
  };
  
  console.log(idris);
  console.log(liam);


// 1. "Here they Come!"

  var adam = {
    name: "Adam Sandler",
    age: 47,
    quote:"That's your home! Are you too good for your home?!"
  };
  
  var kristin = {
    name: "Kristin Bell",
    age: 33,
    quote:"Do you wanna build snowman?",
  };
  
  var jim = {
    name: "Jim Carrey",
    age: 52,
    quote: "...So you're telling me there's a chance? YEAH!",
  };
  
  console.log(adam);
  console.log(kristin);
  console.log(jim);
  console.log(jim.age);
  console.log(kristin["quote"])
  
  var clientList = [idris, liam, adam, kristin, jim];


// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

function Client(name, age, quote){
  this.name = name;
  this.age = age;
  this.quote = quote;
}

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 3. "SHOW 'EM OFF!"

function showOff(array){
  for(var i = 0; i < array.length; i++){
    console.log("Name: " + array[i].name);
    console.log("Age: " + array[i].age);
    console.log("Favorite Quote: " + array[i].quote + "\n");
  };
}

showOff(clientList);



// 4. "But wait, there's more!"
function showQ(client){
  console.log(client.quote);
};

idris.showQuote = showQ(idris);
idris.showQuote;


// 5.  ** BONUS **


function makeHeadline(client){
  console.log(client.name + " is a true thespian! At " + client.age + 
  " years of age. " + client.name +"'s most defining quote is \"" + client.quote 
  + "\" Oscar worthy!");
};

makeHeadline(liam);

// 6. REFLECTION

// Jonathan and I both discussed how our days were and we got caught up so that we could find the right pace to work at.
// We both agreed to switch driver and navigator roles and I started off as the navigator. Jonathan followed my navigations
// with a great deal of patience and he would give me some recommendations as to which decisions we should make when it came
// to coding the required material. We worked well together and we had a very good energy going that kept our conversations
// engaged and out work efficient. When we did happen to come upon a problem (which was when we had to store a function within
// and object) we decided to take a couple of minutes to ourselves to review some of our material and come back and converse
// and work out the problem together. I really think the GPS session helped me gain a better understanding of Javascript concepts.
// John Norton was our advisor and he would answer with great detail our questions when we were confused but he also knew when
// to keep quiet so that my parter and I could work. He was really helpful and he provided a great deal of insight into the world 
// of DBC. I finally learned how to work my javascript code through a text editor (sublime) and then through node. I solidified what
// console.log did and how to read the results from my coding. I felt a great deal more confident then I did when I was doing 
// previous exercises, partly due to the fact that I had a good peer partner/advisor and partly because I had somewhat of a better handle
// on javascript concepts compared to earlier in the week. I really enjoyed working on the project all around, from the planning,
// to the coding. I really didn't find anything tedious because my partner and I would switch driver/navigator positions
// and we would have our own opinions and inputs that made the whole experience engaging and fun.
//

