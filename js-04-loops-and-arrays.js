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