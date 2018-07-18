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
console.log(displayDayAndTime());

