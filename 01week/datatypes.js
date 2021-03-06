'use strict';
//Write a JavaScript program to display the current day and time.
// use new Date(), getDay(), getHours(), getMinutes()
// create an array to hold days of the week
// name function displayDayAndTime()
const displayDayAndTime = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date();
    const day = date.getDay();
    let hours;
    if(date.getHours() < 1){
        hours = 12;
    } else if(date.getHours() > 12) {
        hours = date.getHours() - 12;
    } else {
      hours = date.getHours();
    }
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${daysOfWeek[day]} ${hours}:${minutes}`;
}

// Write a JavaScript program to convert a number to a string.
// function recieves 1 argument, returns a string
// methods: Number.toString()
// name function numberToString()
const numberToString = num => num.toString();

// Write a JavaScript program to convert a string to the number.
// function takes 1 argument, returns a number
// methods: parseInt()
// name function stringToNumber()
const stringToNumber = str => parseInt(str);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean, Null, Undefined, Number, NaN ,String
// function takes 1 argument, returns type of data
// methods: typeof 
// name function printDatatype()
const printDataType = datatype => console.log(typeof datatype);

// Write a JavaScript program that adds 2 numbers together.
// function takes two arguments, returns the sum
// methods: + 
// name functon getSum()
const sumOfTwoNumbers = (num1, num2) => num1 + num2;

// Write a JavaScript program that runs only when 2 things are true.
// function takes 2 arguments, runs when both are true
// methods: && 
// name function areArgumentsTrue()
const areBothTrue = (arg1, arg2) => arg1 && arg2;

// Write a JavaScript program that runs when 1 of 2 things are true.
// function takes two arguments
// methods: || 
// name function isOneTrue()
const isOneTrue = (arg1, arg2) => arg1 || arg2;

// Write a JavaScript program that runs when both things are not true.
// function takes two arguments
// methods: logical not operator ! and && 
// name function areNotTrue()
const areBothNotTrue = (arg1, arg2) => !arg1 && !arg2;
