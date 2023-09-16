let string = `Hi! Recently India celebrated its Independence Day.`

let regex = /[izx]/
// [izx] means match any of the characters 
// 'i', 'z', or 'x'

console.log(regex.test(string)) // true