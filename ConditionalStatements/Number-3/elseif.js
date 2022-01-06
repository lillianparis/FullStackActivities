// Here we are using an if/else statement

let age = 18;
// If Tommy is under 18, then a log of "Timmy is under 18 years old" will appear
if (age < 18) {
  console.log("Tommy is under 18 years old.");
} 
// This is new!
// Here is a new condition to test
// If Timmy's age is older than 18 years old or 18, AND younger than 21 years old or 21. Then this prompt will appear. 
else if (age >= 18 && age <= 21) {
  console.log("Tommy is between the ages of 18 and 21.");
} 
// If both of the statements above are false then the last statement will appear in the log.
else {
  console.log("Tommy is over 21 years old.");
}


// Edit in the console.log to see the changes
let age = 18;
if (age < 18) {
  console.log("Tommy is under 18 years old.");
} 
else if (age >= 18 && age <= 21) {
  console.log("Tommy is between the ages of 18 and 21.");
} 
else {
  console.log("Tommy is over 21 years old.");
}
