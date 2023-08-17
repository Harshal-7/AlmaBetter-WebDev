// Merge Arrays

let arr1 = [
    1,2,3
]
let arr2 = [
    4,5,6
]

let negativeNumbers = [
    -1,-2,-3
]
let arr3 = [
    ...arr1,
    ...arr2,
    ...negativeNumbers
]

console.log(arr3)

console.log([
    ...negativeNumbers,
    ...arr1,
    ...arr2
]);