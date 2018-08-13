// Boolean expressions
// ... and variable assignment

// Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true.
// Test your answers by using console.log in front of each expression in your answer file.
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

// // 1.)
// console.log(a != b);
// // 2.)
// console.log(c > d);
// // 3.)
// console.log('Name' === 'Name');
// // 4.)
// console.log(a + b === c);
// // 5.)
// console.log(a * a === d);
// // 6.)
// console.log(e === 'Kevin');
// // 7.)
// console.log(48 == '48');



// Write a while loop that prints out the letter A 21 times
// let letters = "A";
// let i = 0;

// while (i < 20) {
// 	letters += "A";
// 	i++;
// }

// console.log(letters);



// Write a for loop that will console.log the numbers 0 to 999.

// for (let i = 0; i <= 999; i++) {
// 	console.log(i);
// }



// For loop control panel
// Here is an example for loop that prints a message 100 times:

// for (let i=0; i < 100; i++) {
// 	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
// }
// What are the three components of the control panel? Each component is separated by a semicolon ;.

// Write your answers as comments in the file.

// The first part of the control panel is: initialization
// The second part of the control panel is: condition
// The third part of the control panel is: increment or decrement



// For loop in reverse
// Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.

// for (let i = 999; i >= 0; i--) {
// 	console.log(i);
// }



// Write a for loop that uses interpolation to send a message to the console as well as the current value of i.

// The loop should run from 1 to 10.

// Expected Result:

// The value of i is: 1 of 10
// The value of i is: 2 of 10
// The value of i is: 3 of 10
// The value of i is: 4 of 10
// The value of i is: 5 of 10
// The value of i is: 6 of 10
// The value of i is: 7 of 10
// The value of i is: 8 of 10
// The value of i is: 9 of 10
// The value of i is: 10 of 10

// for (let i = 1; i <= 10; i++) {
// 	console.log(`The value of i is: ${i} of 10`);
// }



// Iteration
// const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
// // Iterate over the StarWars array and print each element to the console.

// // Iterate over the StarWars array again and print each character's name as well as the value of i.

// for (let i=0; i < StarWars.length; i++) {
// 	console.log(StarWars[i]);
// }

// // CHALLENGE

// // Figure out how to iterate over every second element of the StarWars array, starting with the first element.
// // => Han, R2D2, Leia

// // Skip this challenge if you end up spending too much time on it.

// for (let i=0; i < StarWars.length; i+= 2) {
// 	console.log(StarWars[i]);
// }



// 1
// Write a while loop that will log in the console

// 'Ginger chocolate honey patties'
// 1000 times. You can test it out with a smaller number first, such as 10, and when that works, use 1000.

// Make sure you do not run an infinite loop! If you do, close your Terminal. Oops!

// let i = 0;

// while (i < 10) {
// 	console.log("Ginger chocolate honey patties ");
// 	i++;
// }



// Write another while loop that counts from 0 to 1000 and will log in the console the current loop number.

// => 0
// => 1
// => 2
// => 3
// etc.

// let i = 0;

// while (i <= 1000) {
// 	console.log(i);	
// 	i++;
// }


// Write another while loop that prints a message to the console and interpolates the current loop number. Make it count from 0 to 1000.

// => "Current loop number is: 0"

// => "Current loop number is: 1"

// => "Current loop number is: 2"

// => "Current loop number is: 3"

// let i = 0;

// while (i <= 1000) {
// 	console.log(`Current loop number is: ${i}`)
// 	i++;
// }



// Write a for loop that counts from 0 to 100 and console.logs each number.

// for (let i = 0; i <= 100; i++) {
// 	console.log(i);
// }

// Write another for loop that counts from 7 to 635 (no more, no less!), and console.logs each number.

// for (let i = 7; i <= 635; i++) {
// 	console.log(i);
// }



// Declare a variable let start = 0
// Declare a variable const limit = 100
// Write a for loop that counts from the value of start to the value of limit, using those variables in the control panel of the loop.
// Test the loop thoroughly.

// let start = 0;
// const limit = 100;

// for (start; start <= limit; start++) {
// 	console.log(start);
// }


// Think of something in real life, or nature, or wherever / whenever that displays looping behavior.
// Use a for loop to model the looping behavior of that thing.

// Where does the loop begin? Where should it end? Does it simply count from one number to another? Or does it change or mutate data?

let carStart = 0;
const speedLimit = 65;

for (carStart; carStart <= speedLimit; carStart++) {
	console.log(carStart);
}
