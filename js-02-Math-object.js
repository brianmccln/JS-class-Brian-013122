// JS Math operators: +, -, /, *, %, **
var x = 14;
var y = 2;

var sum = x + y; // 14 + 2
console.log(sum); // 16

var diff = x - y; // 14 - 2
console.log(diff); // 12

var prod = x * y; // 14 * 2
console.log(prod); // 28

var quot = x / y; // 14 / 2
console.log(quot); // 7

var remainder = x % y; // 14 / 2 = 7 remainder 0
console.log(remainder); // 0
var remainder2 = x % (y*y); // 14 / 4 = 3 remainder 2
console.log(remainder2); // 2

var i = 24; // how to check if i is odd or even?

if(24 % 2 == 0) { // 24/2 yields a remainder of 0 -- true or false?
    // i is even
} else {
    // i is odd
}

i = 25 // how to check if i is odd or even?

var exp = x ** y; // 14^2 = 14*14
console.log(exp); // 196

// Order of Operations of Mathematical Expressions
var tot1 = 3 + 4 * 5;
console.log(tot1); // 23

var tot2 = 3 * 4 + 5;
console.log(tot2); // 17

var tot3 = (3 + 4) * 5;
console.log(tot3); // 35

// Math object
x = 5.5
console.log( Math.round(x) ); // 6
y = 11.23
console.log( Math.round(y) ); // 11
x = 8.79
console.log( Math.floor(x) ); // 8
y = 11.23
console.log( Math.ceil(y) ); // 12
// area of a circle (pi * r^2)
var r = 4;
var area = Math.PI * r**2;
console.log(area);

// Math.random()
var randomNum = Math.random();
console.log(randomNum); // 0.5600599245005402 for example

// use Math.random() to get random int from 0-100 and console log it
var numFrom0to100 = randomNum * 100;
console.log(numFrom0to100);

var intFrom0to99 = Math.floor(numFrom0to100);
console.log(intFrom0to99);

// generate a random number from 1-100
var randomMysteryNum = Math.ceil( Math.random() * 100 );
// alert(randomMysteryNum); // just see if you got a int from 1-100
// output mystery num to p tag:
// document.getElementById('mysteryNum').innerHTML += randomMysteryNum;
var feedback = document.getElementById('feedback'); // get the feedback p tag

// a function that runs when player clicks button to submit their guess
function compareGuessToMysteryNumber() {

    // alert("hola from function!"); // see if func is being called by btn
    // we need the user input (a stringy num that we convert to an actual num)
    var num = document.getElementById('num').value; // get the user's guess
    num = Number(num); // convert guess from string to actual number
    // we need conditional logic to compare user guess to mystery num
    // MINI-CHALLENGE: output feedback to a p tag instead of an alert
    // the p tag can go right under the p tag you already have
    if(num < randomMysteryNum) {
        feedback.innerHTML = 'Your guess is too LOW';
    } else if(num > randomMysteryNum) {
        feedback.innerHTML = 'Your guess is too HIGH';
    } else {
        feedback.innerHTML = 'Congrats! You guessed the number!';
    }

}

// get the button that the user clicks to run the function
var btn = document.getElementById('btn');
// make button call function when clicked
btn.addEventListener('click', compareGuessToMysteryNumber);