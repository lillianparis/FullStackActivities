let timmyIsPaying = true;
let isSale = false;
// The NOT operator makes timmyIsPaying 'false' instead of true
if (!timmyIsPaying || isSale) {
  console.log("Tommy gets a free lunch paid for by Timmy");
} else {
  console.log("Tommy gets to fork out lunch money.");
}
