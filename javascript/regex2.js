// If we want to know whether a string starts with a particular word or not, 
// we can use ^ symbol in the beginning of the word to check it.

let string = "Hi! Welcome to the real world where you learn the 'real world' things!!!"

let regex = /^h/

// ^ is the symbol for "start of the string" by default the matches are case sensitive
// this means that it will be differentiate between 'H' and 'h'
console.log(regex.test(string));  // false because of 'h'

let patternNew = /^h/i
// i is the symbol for 'case insensitive'
// even though the string starts with 'H' and not 'h' the pattern will still match

console.log(patternNew.test(string)) // true