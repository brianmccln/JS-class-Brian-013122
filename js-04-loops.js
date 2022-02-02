// make an array of fruits
var fruits = ['apple', 'apricot', 'blueberry', 'cherry', 'kiwi', 'lime', 'mango', 'peach', 'pear', 'pineapple', 'plum', 'raspberry', 'strawberry'];
// use a loop to go through the array
// for each item in the array, apply if else logic:
// if the fruit includes 'berry', make jam: 'raspberry jam'
// else if the fruit length (number of chars) is 5+, make jelly: 'cherry jelly'
// else (the fruit length is only 4 letters), make jellybean: 'kiwi jellybean'
// console log each thing as you go (each time through loop, another console.log)
for(var i = 0; i < fruits.length; i++) {

    var fruit = fruits[i]; // get the current fruit when i = 0, fruits[i] = fruits[0] = 'apple'
    var product = "";

    if(fruit.includes('berry')) { // does the fruit include 'berry' ..?
        product =  fruit + ' jam';
    } else if(fruit.length >= 5) {
        product = fruit + ' jelly';
    } else { // fruit has max 4 chars
        product = fruit + ' jellybean';
    }
    console.log(product);

}

// Classic Fizz Buzz Programming Job Interview Challenge
// output to the console all integers from 1-100
// if the number is evenly divisible by 3, output 'Fizz' instead
// if the number is evenly divisible by 5, output 'Buzz' instead
// if the number is evenly divisible by 3 AND 5, output 'Fizz Buzz'
// ALGORITHM: How do we approach and solve the problem?
for(var i = 1; i <= 100; i++) {

    console.log(i);

}

var r1 = 20 % 3; // 2   (20/3 = 6 r 2)
console.log(r1);
var r2 = 20 % 7; // 6   (20/7 = 2 r 6)
console.log(r2);
var r3 = 20 % 8; // 4   (20/8 = 2 r 4)
console.log(r3);
var r4 = 20 % 19; // 1  (20/19 = 1 r 1)
console.log(r4);
var r5 = 20 % 4; // 0   (20/4 = 5 r 0)
console.log(r5);