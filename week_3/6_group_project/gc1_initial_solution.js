// My role in the group is: Person 3 - Translate Pseudocode into Code

// Here is my part of the challenge:

var oddLengthArray = [1,2,3,4,5,5,7];
var evenLengthArray = [4,4,5,5,6,6,6,7];

function assert (test, message, test_number) {
	if (!test) {
		console.log(test_number + "false");
		throw "Error: " + message;
	}
	console.log(test_number + "true");
	return true;
}


//This is where my solution starts

function sum (array) {
	sumTotal= 0;
	for (var i = 0; i < array.length; i++) {
		sumTotal += array[i];
	}
	return sumTotal;
}

function mean (array) {
	meanTotal= 0;
	for (var i = 0; i < array.length; i++) {
		meanTotal += array[i];
	}
	return meanTotal/array.length;
}

function median (array) {
	array.sort(function(a,b) {return a - b;});
	var half = Math.floor(array.length/2)
if(array.length % 2)
	return array[half];
else
	return (array[half - 1] + array[half]) / 2.0;
}

//This is where my solution ends

assert(
	(sum instanceof Function),
	"sum should be a Function.",
	"1. "
);

assert(
	(sum(oddLengthArray) === 27),
	"sum should return the sum of all elements in an array with an odd length.",
	"2. "
);

assert(
	(sum(evenLengthArray) === 43),
	"sum should return the sum of all elements in an array with an even length.",
	"3. "
);

assert(
	(mean instanceof Function),
	"mean should be a Function",
	"4. "
);

assert(
	(mean(oddLengthArray) === 3.857142857142857),
	"mean should return the average of all elements in an array with an odd length.",
	"5. "
);

assert(
	(mean(evenLengthArray) === 5.375),
	"mean should return the average of all elements in an array with an even length.",
	"6. "
);

assert(
	(median instanceof Function),
	"median should be a Function",
	"7. "
);

assert(
	(median(oddLengthArray) === 4),
	"median should return the median value of all elements in an array with an odd length.",
	"8. "
);

assert(
	(median(evenLengthArray) === 5.5),
	"median should return the median value of all elements in an array with an even length.",
	"9. "
);

//REFLECT


// The first thing that my group members and I needed to do was communicate. We had to reach out to one another and set
// up a schedule and find out who could start the group project. Thankfully we were all able to respond and get a general
// idea of everyones' situation through e-mail. Alot of us were busy and we also weren't completely comfortable with 
// the material earlier on in the week so we ended up pushing the start day of the project til around friday. I didn't have
// any questions while I was coding, but I did refer to the intro to javascript material for loops during my portion of
// the challenge. I actually had some trouble understanding how the loop function works, but as I typed it in and worked
// it out, things started to click. I feel pretty confident with the basics of loops. I'm not sure what would happen if
// we went to more advanced techniques for loops, but I do feel like I can hold my own for a little bit in basic loop concepts.
// I enjoyed this challenge because I actually felt as though I were coding javascript like a veteran coder, which really
// isn't the case, but it's fun to imagine. There was nothing tedious about this challenge.
// I can definitely say that this group challenge was an interesting experience. It's alot easier setting up schedules
// with just a pair. However, when more and more people come in, things start to get a little more chaotic and communication
// becomes an integral part of making sure the work gets done. It's awesome in that the workload gets spread thin, however,
// there appears to be more work on the organizing side of group projects. Yes our group was successful. I learned that 
// writing user stories, pseudocoding, writing code, refactoring, etc... all really facilitate the coding process. Although
// it may be a little bit of work in the beginning, it helps to keep a record of the process of how the coding comes to be.
