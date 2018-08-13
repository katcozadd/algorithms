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

for (let i = 1; i <= 10; i++) {
	console.log(`The value of i is: ${i} of 10`);
}
