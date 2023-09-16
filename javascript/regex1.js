// Regular expressions are patterns used to match character combinations in strings.
// In JavaScript, regular expressions are also objects.
// These patterns are used with the exec() and test() methods of RegExp, and with 
// match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String

let string = "Recently India celebrated its Independence Day."

// Problem: I want to know if in the above sentence "ebr" occurs togethor or not
// Solution: Use regex to find the pattern

let regex = /ebr/

// regular expression means a pattern pattern that we want to find
// Here the pattern is ebr
// regular expression starts with / and ends with /

let output = regex.test(string);

// test method returns true if the pattern is found in the string else it returns false

console.log(output)