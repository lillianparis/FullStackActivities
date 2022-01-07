// Here is an else-if statememnt
let pet = "pelican";

if (pet === "pelican") {
  console.log("Pelicans name Gulliver");
} else if (pet === "Penguin") {
  console.log("Penguins name formal-chicken");
} else if (pet === "Lobster") {
  console.log("Lobsters name dragon-shrimp");
} else if (pet === "snake") {
  console.log("Snakes name nope-rope");
} else if (pet === "Walrus") {
  console.log("Walrus’ name floppy-potato");
} else {
  console.log("I don't own a pet");
}

// Here is the Switch statement
// In programming, a switch statement is a control-flow statement that tests the value of an expression against multiple cases.
// They look similar huh?
// Well lets see what this looks like in the console...
const pet = "pelican";

switch (pet) {
  case "pelican":
    console.log("Pelicans name Gulliver");
    break;
  case "penguin":
    console.log("Penguins name formal-chicken");
    break;
  case "lobster":
    console.log("Lobsters name dragon-shrimp");
    break;
  case "snake":
    console.log("Snakes name nope-rope");
    break;
  case "walrus":
    console.log("Walrus’ name floppy-potato");
    break;
  default:
    console.log("I don't own a pet");
    break;
}
