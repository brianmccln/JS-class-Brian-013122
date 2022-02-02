// In JS there are two ways to make an html element:
// document.createElement and with the new keyword (for some elements)
// we want to put a new div into the wrapper div that is already in the html

// ELEMENT MAKING METHOD #1 : document.createElement
var wrapper = document.getElementById('wrapper'); // get wrapper div
var newDiv = document.createElement('div'); // make new div
newDiv.className = 'my-div'; // assign a class to new div
wrapper.appendChild(newDiv); // put new div into wrapper div

// ELEMENT MAKING METHOD #2 : new keyword
// make an img element to hold our playing card image
var cardImg = new Image(); // instantiate an instance of the Image Class
cardImg.src = "images/cards350px/Queen-of-Diamonds.png";
newDiv.appendChild(cardImg); // put new img element into wrapper div

// if we wanted to have all the cards available to JS -- let's say we wanted
// to be able to choose a random card from the deck, we would need all file names
// an array would be the best way to store all the file names in one place
// var deckOfCards = []; // make a new empty array to hold our deck of card file names

// make two arrays to iterate over: kinds and suits
// var kinds = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]; // 13
// var suits = ["Clubs", "Diamonds", "Hearts", "Spades"]; // 4

// a nested loop to give us 13 x 4 combos (1 for each card )

for (var i = 0; i < 13; i++) { // outer loop runs 13x

    for (var j = 0; j < 4; j++) { // inner loop runs 4x

        console.log('i = ' + i + ' --- j = ' + j)

    }

}