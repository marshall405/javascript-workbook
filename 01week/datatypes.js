//Write a JavaScript program to display the current day and time.
// use new Date(), getDay(), getHours(), getMinutes()
// create an array to hold days of the week
// name function displayDayAndTime()
const displayDayAndTime = () => {
    const daysOfWeekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date();
    const day = date.getDay();
    const hours = date.getHours() > 12 ?      date.getHours() - 12 : date.getHours();
    const minutes = date.getMinutes();
    return `${daysOfWeekArray[day]} ${hours}:${minutes}`;
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
const getSum = (num1, num2) => num1 + num2;

// Write a JavaScript program that runs only when 2 things are true.
// function takes 2 arguments, runs when both are true
// methods: ternary operator
// name function areArgumentsTrue()
const areArgumentsTrue = (arg1, arg2) => arg1 && arg2 ? true : false;