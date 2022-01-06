// Hour
// If the hour is between 6 am and 12 pm: Good Morning!
// If it is between 12pm and 6pm: Good Afternoon!
// Otherwise: Good Evening!

if (condition) {
    statement
}
else if (anotherCondition) {
    statement
}
else if (yetAnotherCondition) {
    statement
}
else 
statement

// Setting the hour
let hour = 10;

// If the hour is greater than or equal to 6, AND less than or equal than 12, THEN Good morning

if (hour >= 6 && hour < 12) {
    console.log('Good morning');
}

// If the if statement isn't true, THEN if the hour is greater than or equal to 12, AND less than 18 then Good afternoon
else if (hour >= 12 && hour < 18) {
   console.log('Good afternoon');
}
// If neither conditions are true. Then automatically set to Good evening.
else 
console.log('Good evening');