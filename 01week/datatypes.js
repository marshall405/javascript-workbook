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
const numberToString = (num) => num.toString();

// Write a JavaScript program to convert a string to the number.
// function takes 1 argument, returns a number
// methods: parseInt()
// name function stringToNumber()
const stringToNumber = (str) => parseInt(str);