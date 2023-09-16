// JSON.parse()
// (str-to-obj)
// The JSON.parse() function is used to parse a JSON-formatted STRING and convert it into a JavaScript OBJECT.
// Syntax: JSON.parse(str)
// str: A valid JSON-formatted string that you want to parse.

const jsonString = '{"name": "John", "age": 30, "isStudent": true}';
const parsedObject = JSON.parse(jsonString);

console.log(parsedObject.name);
console.log(parsedObject.age);
console.log(parsedObject.isStudent);
console.log(typeof parsedObject);
console.log(typeof jsonString);

// Output:
// John
// 30
// true
// object
// string