// JSON.stringify(): 
// Used to convert a JavaScript object into a JSON-formatted string.
// Syntax: JSON.stringify(jsonObject[, replacer[, space]])
// jsonObject: The JavaScript object you want to convert to a JSON-formatted string.
// replacer (optional): A function or an array used to customize the serialization of the object (more advanced usage).
// space (optional): A string or number representing the number of spaces for indentation in the resulting JSON string (for pretty-printing).

const person = { name: "Alice", age: 25, isStudent: false };
const jsonString = JSON.stringify(person);

console.log(jsonString);
console.log(typeof person);
console.log(typeof jsonString);

// Output
// {"name":"Alice","age":25,"isStudent":false}
// object
// string