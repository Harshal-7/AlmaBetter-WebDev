let string = `Hi! Recently India celebrated its Independence Day`

// If we want to know if the string ends with a particular word / character or not
// we can use the $ sign to check if the string ends with a particular word or not

// Like we have ^ to check if the string starts with a character / word
// we have $ to check if the string ends with a character / word

let pattern = /day$/i
console.log(pattern.test(string))