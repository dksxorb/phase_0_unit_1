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
