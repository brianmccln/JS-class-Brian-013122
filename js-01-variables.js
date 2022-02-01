// alert('Welcome to JS Variables Lesson!');
// a variable is a container that stores a value
// its value can change (vary)
// variables are of certain datatypes
// in JS, declare a variable w var keyword:
// ###***### STRINGS ###***###
// datatype: string (text)
var fruit = 'apple'; // values can go in single or double quotes
var lastName = "Smith"; // var is "camel cased"
// naming rules: can't start w number
// no spaces, no special chars (except $ and _)
var first_name = "Jane"; // var is "snake cased"
// vars are case-sensitive: myname and myName are different vars
var myname = "Brian";
var myName = 'Brian';
// concatenation: combining strings as var + string 
var greeting = "Hello! My name is " + myName;
var introduc = 'My favorite fruit is ' + fruit;
console.log(greeting);
console.log(introduc);
// EXERCISE : concatenate using 2 variables and console log:
// "My name is Brian! My favorite fruit is apples!"
var aboutMe = "Hello! My name is " + myName + "! My favorite fruit is " + fruit + "s!";
console.log(aboutMe);
// EXERCISE :
// Declare a variable car and give it any value you like. 
// Declare a variable food and give it any value you like. 
// Declare a variable myFavorites and set its value to a concatentation of car and food.
// Log myFavorites to the console, so that you get something like:
// "My favorite car is Porsche and my favorite food is steak."

// ###***### FUNCTION TO GET NAME FROM INPUT BOX ###***
// getElementById brings the entire tag into JS as an Object variable
var firstName = document.getElementById('firstName');  
console.log("firstName:", firstName); // the whole element as a tag appears
// this gives you access to all the properties of the element:
// use dot-syntax to access (get) and change (set) properties
console.log("firstName placeholder:", firstName.placeholder); // First Name
console.log("firstName type:", firstName.type); // text
console.log("firstName id:", firstName.id); // firstName
console.log("firstName value:", firstName.value); // this is undefined so far
// set the placeholder (change what it says in the input box)
firstName.placeholder = "Enter First Name";

// and now for the function that gets the name the user entered:
// functions are variables, so var naming rules apply
// function name should start with a verb because funcs perform actions
// a function only runs when it is called by some event
function getFirstName() {
    // alert('Hello from the getFirstName function!');
    // code that runs when func is called
    var fName = document.getElementById('firstName').value; // just what user typed
    var fruit = document.getElementById('fruit').value; // just what user typed
    var msg = "Hello! My name is " + fName + "! My favorite fruit is " + fruit;
    console.log(msg);
} 

// get the button
var myBtn = document.getElementById('my-btn');
// tell the button to call the function on click
myBtn.addEventListener('click', getFirstName);

// ###***### JS is NOT strict about DATATYPES ###***###
// number vars can be either integers (whole numbers) or floats (decimals)
// JS does not make you declare which kind of number
// JS also lets you switch a vars datatype, which some languages do not allow
var eggs = "dozen"; // string
console.log(eggs); // dozen
// change var datatype from string to number
eggs = 12; // number
console.log(eggs); // 12
// JS also lets you REDECLARE a var -- some other languages do not allow this
var eggs = ['fried', 'poached', 'scrambled']; // REDECLARE and CHANGE datatype
console.log(eggs); // ['fried', 'poached', 'scrambled']
console.log(eggs[0]); // fried -- array values can be accessed by index from 0

// ###*** NUMBER VARS ###***
var x = 5; // x is an int
console.log(x); // 5
console.log(typeof(x)); // number
console.log(typeof(greeting)); // string
console.log(typeof(eggs)); // object
x = 7.6; // set the value of x

var y = 3.456; // y is a float
console.log(y); // 3.456
console.log(typeof(y)); // number
y = 13; // set the value of y

var z = x + y; // z is set equal to an expression
console.log(z); // 20.6
console.log(typeof(z)); // number

x = 'hola'; // set the value of x AND change the datatype
console.log(x); // hola
console.log(typeof(x)); // string
z = x + y; // "hola13" // string + num = + is not math anymore -- it is concatenation
// z has been "coerced" into a string
console.log(z); // hola13
console.log(typeof(z)); // z has been "coerced" into being a string
console.log(y); // 13
console.log(typeof(y)); // y is still a number

// function that adds two values
// declare 2 global variables
var num1 = 8;
var num2 = 24;
// var num3 = num1 + num2;
// console.log("num3:", num3);

function addNums() {
    // output sum of num1 and num2 to the console
    var tot = num1 + num2; // tot is a local variable, available ONLY to its function
    console.log("tot:", tot);
}

addNums(); // call the function from the js script -- no button, no html element, no event
console.log("num1:", num1); // 8
console.log("num2:", num2); // 24
// console.log("tot:", tot); // ReferenceError: num3 is not defined

function addUserInputNums() {
    // get the nums from the input boxes and add them together; then console log the sum:
    // 1 line to get the num1 input box value
    var num1 = document.getElementById('num1').value;
    // 1 line to get the num2 input box value
    var num2 = document.getElementById('num2').value;
    // 1 line to add num1 + num2
    var tot = Number(num1) + Number(num2); // convert stringy nums into actual nums
    // 1 line to console log the sum of num1 + num2
    console.log(tot); 
}

// have the btn-nums button call the addUserInputNums() function
// get the button by its id (id="btn-nums") and save it to a JS var: btnNums
// 1 line to go get the button
var btnNums = document.getElementById('btn-nums');
// have the button "listen for an event" and call the function when clicked
// 1 line to have the button call function when clicked
btnNums.addEventListener('click', addUserInputNums);