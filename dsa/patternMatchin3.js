// Splitting: Regular expressions can be used to "split a string into an array" based on a delimiter or a pattern. 
// The split() method of a string is used for this task.

const regex = /[,\s]+/; // Matches commas and spaces
const str = "apple, banana, orange, kiwi";

const fruitsArray = str.split(regex);

console.log(fruitsArray);

// OUTPUT
// ['apple', 'banana', 'orange', 'kiwi']