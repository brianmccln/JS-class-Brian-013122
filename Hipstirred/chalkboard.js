// alert('Time for a Coffee!');

var dateTime = new Date();

// get day as number, with Sunday=0 and Saturday=6
var day = dateTime.getDay(); 
console.log('day:', day); // number

// make an array of the days of the week
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// get the day of the week as a string by looking it up in the dayOfWeek array
var dayStr = daysOfWeek[day];
console.log('dayStr:', dayStr); // string

// hour, minute and second as numbers
var hour = dateTime.getHours(); // 14 (0-23)
var greeting = "Good ";

if(hour < 12) {
    greeting += "Morning !";
} else if(hour < 17) {
    greeting += "Afternoon !";
} else {
    greeting += "Evening !";
}

// on page load output to the chalkboard
// the day of the week and the current hour
var chalkboard = document.getElementById('chalkboard');
chalkboard.innerHTML = "It's " + dayStr.toUpperCase() + '!<br>' + greeting.toUpperCase();