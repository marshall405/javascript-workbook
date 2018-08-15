// Create a new file called loops.js in the /04week folder of your workbook.
// Complete each of the following exercises.

// for loop
    // Use a for loop to console.log each item in the array carsInReverse.
const carsInReverse = ['Honda', 'Ford', 'Chevrolet', 'BMW', 'Dodge'];
for(let i = 0; i < carsInReverse.length; i++){
    console.log(carsInReverse[i]);
}
// for...in loop
    // Create an object (an array with keys and values) called persons with the following data:
    // firstName: "Jane"
    // lastName: "Doe"
    // birthDate: "Jan 5, 1925"
    // gender: "female"
const persons = {
    firstName : 'Jane',
    lastName : 'Doe',
    birthDate : 'Jan 5, 1925',
    gender : 'female'
}
// Use a for...in loop to console.log each key.
for(let key in persons){
    console.log(key);
}
// Then use a for...in loop and if state to console.log the value associated with the key birthDate.
for(let key in persons){
    if(key === 'birthDate'){
        console.log(persons[key]);
    }
}
// while loop
// Use a for loop to console.log the numbers 1 to 1000.
let number = 1;
while(number < 1001){
    console.log(number);
    number += 1;
}
// OR...
// for(let i = 1; i < 1001; i++){
//     console.log(i);
// }

// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.
// {
//     let number = 1;
//     do{
//         console.log(number);
//         number+=1;
//     }while(number < 1001);
// }
// When is a for loop better than a while loop?
// It would be better to use a for loop when you know how many times you want to loop through a block of code.
// while loop would be better when you want to continue looping through a block until a certain condition is met.

// How is the readability of the code affected?
// A for loop keeps the variable, condition and increment all in one spot 

// What is the difference between a for loop and a for...in loop?
// A for loop lets you loop over a block of code a certain amout of times.
// A for in loop lets you iterate over the keys of an object

// What is the difference between a while loop and a do...while loop?
// the only difference is that a do while loop will execute the block once before checking the condition.