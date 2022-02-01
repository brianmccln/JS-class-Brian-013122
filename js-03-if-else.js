// get the button and save it as a js obj var
var btn = document.getElementById('btn');
// make the btn clickable to call a func
btn.addEventListener('click', login);

// the "correct" username and password
var user = "Joe";
var pswd = "abc";

// get the pleaseLogIn and feedback tags
var feedback = document.getElementById('feedback');
var pleaseLogIn = document.getElementById('pleaseLogIn');
// btn calls a login func so that func needs to exist
function login() {
    // what happens? this func runs when user clicks Login Button
    // get the values from the username and password input fields
    var username = document.getElementById('username'); // get the whole input box
    var password = document.getElementById('password'); // get the whole input box
    // compare username & password (entered by user) user & pswd (the correct values)
    // && comparison operator is for evaluating 2 or more conditions
    // BOTH conditions must be true for the if code to run
    // put the feedback in the feedback tag NOT as an alert
    if(username.value == user && password.value == pswd) {
        feedback.style.fontSize = '2em';
        feedback.innerHTML = 'Welcome back ' + user;
        // log in successful, so hide unnecessary elements
        username.style.display = "none"; // hide username field
        password.style.display = "none"; // hide password field
        btn.style.display = "none"; // hide the Log In button
        pleaseLogIn.style.display = "none"; // hide Please Log In
    } else {
        feedback.innerHTML = "Log in failed. Try again.";
    }

}

// Date Object returns the full date time from the user's computer
// it is instantiated (you declare a var of it) by using the new keyword
var dateTime = new Date(); // instantiate an instance of the Date object
console.log(dateTime);
// get date-time units: year, month, day, date, hour, min, sec
// call the methods of the Date object to get the date-time units:
var year = dateTime.getFullYear();
console.log('year:', year); // 2022

// get month, date and day as numbers
var month = dateTime.getMonth();
console.log('month:', month); // number (Jan=0, Feb=1, Dec=11)
// get month and day as numbers
var monthStr = dateTime.toLocaleString('default', { month: 'long' })
console.log('monthStr:', monthStr); // string (January, February, etc)

// get date, which is always a number
var date = dateTime.getDate(); 
console.log('date:', date); // number

// get day as number, with Sunday=0 and Saturday=6
var day = dateTime.getDay(); 
console.log('day:', day); // number

// make an array of the days of the week
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// get the day of the week as a string by looking it up in the dayOfWeek array
var dayStr = daysOfWeek[day];
console.log('dayStr:', dayStr); // string

// hour, minute and second as numbers
var hour = dateTime.getHours(); // 0-23
var minute = dateTime.getMinutes();
var second = dateTime.getSeconds();
console.log('hour:', hour);
console.log('minute:', minute);
console.log('second:', second);