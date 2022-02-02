// In JS there are two ways to make an html element:
// document.createElement and with the new keyword (for some elements)
// we want to put a new div into the wrapper div that is already in the html
var wrapper = document.getElementById('wrapper'); // get wrapper div
var newDiv = document.createElement('div'); // make new div
newDiv.className = 'my-div'; // assign a class to new div
wrapper.appendChild(newDiv); // put new div into wrapper div
