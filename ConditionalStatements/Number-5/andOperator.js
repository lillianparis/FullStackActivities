// Here is an && Operator
// This just allows us to shove two tests into one condition

let age= 20;
let ownsCar= true;

// If the age is greater than or equal to 16 and owns a car then Tom Nook is a baller
if (age >= 16 && ownsCar) {
  console.log("Tom Nook is a baller");
} 
// If one or both conditions are false then Tom Nook doesn't drive
else {
  console.log("Tom Nook does not drive.");
}
