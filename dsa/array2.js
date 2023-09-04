// push():
// This method adds one or more elements to the end of an array. 
// The original array is modified, and the new length of the array is returned as the result. 
// This method is commonly used to add new elements to an array. 

let arr1 = ["apple", "banana", "orange"];
arr1.push("pear");
console.log(arr1);

// Output
// ["apple", "banana", "orange", "pear"]
//----------------------------------------------------------------------------------------------------------------------------

// pop():This method removes the last element from an array. 
// The original array is modified, and the removed element is returned as the result.
// This method is commonly used to remove the last element from an array.

let arr2 = ["apple", "banana", "orange"];
arr2.pop();
console.log(arr2);

// Output
// ["apple", "banana"]
//----------------------------------------------------------------------------------------------------------------------------

// shift(): This method removes the first element from an array. 
// The original array is modified, and the removed element is returned as the result. 
// This method is commonly used to remove the first element from an array.

let arr3= ["apple", "banana", "orange"];
arr3.shift();
console.log(arr3);

// Output
// ["banana", "orange"]
//----------------------------------------------------------------------------------------------------------------------------

// unshift(): This method adds one or more elements to the beginning of an array. 
// The original array is modified, and the new length of the array is returned as the result.
// This method is commonly used to add new elements to the beginning of an array.

let arr4 = ["apple", "banana", "orange"];
arr4.unshift("pear", "watermelon");
console.log(arr4);

// Output
// ["pear", "watermelon", "apple", "banana", "orange"]

//----------------------------------------------------------------------------------------------------------------------------

// slice(): This method returns a portion of an array. The original array is not modified,
// and the result is a new array containing the selected elements. 
// This method is commonly used to make a copy of a portion of an array. 

let arr5 = ["apple", "banana", "orange"];
let newArray1 = arr5.slice(1, 2);
console.log(newArray1);

// Output
// ["banana"]
//----------------------------------------------------------------------------------------------------------------------------

// splice(): This method adds or removes elements from an array. 
// The original array is modified, and the removed elements (if any) are returned as the result.
// This method is commonly used to add or remove elements from an array at a specific position.

let arr6 = ["apple", "banana", "orange"];
arr6.splice(1, 1, "pear", "watermelon");
console.log(arr6);

// Output
// ["apple", "pear", "watermelon", "orange"]
//----------------------------------------------------------------------------------------------------------------------------

// concat(): This method joins two or more arrays. The original arrays are not modified,
// and the result is a new array containing all the elements of the original arrays. 
// This method is commonly used to combine multiple arrays into a single array.

let array1 = ["apple", "banana", "orange"];
let array2 = ["pear", "mango"];
let newArray2 = array1.concat(array2);

console.log(newArray2);
// Output
// ["apple", "banana", "orange", "pear", "mango"]
//----------------------------------------------------------------------------------------------------------------------------

// join(): This method joins all elements of an array into a string. 
// The original array is not modified, and the result is a new string containing all the elements
// separated by a specified separator. This method is commonly used to convert an array into a comma-separated string.

let arr7 = ["apple", "banana", "orange"];
let myString = arr7.join(", ");
console.log(myString);

// Output
// "apple, banana, orange"
//----------------------------------------------------------------------------------------------------------------------------

// reverse(): This method reverses the order of elements in an array. 
// The original array is modified, and the result is the reversed array. 
// This method is commonly used to reverse the order of elements in an array.

let arr8 = ["apple", "banana", "orange"];
arr8.reverse();
console.log(arr8);

// Output
// ["orange", "banana", "apple"]
//----------------------------------------------------------------------------------------------------------------------------

// sort(): This method sorts the elements of an array. 
// The original array is modified, and the result is the sorted array. 
// This method is commonly used to sort the elements of an array in ascending or descending order.

let arr9 = ["banana", "apple", "orange"];
arr9.sort();
console.log(arr9);

// Output
// ["apple", "banana", "orange"]
//----------------------------------------------------------------------------------------------------------------------------

// filter(): This method creates a new array with all elements that pass the test implemented by
// provided function. It is commonly used to filter elements from an array based on a condition.

let Array1 = [1, 2, 3, 4, 5];
let newArray3 = Array1.filter(function(element) {
  return element % 2 === 0;
});

console.log(newArray3);

// Output
// [2, 4]
//----------------------------------------------------------------------------------------------------------------------------

// map(): This method creates a new array with the results of calling a provided function 
// on every element in the calling array. It is commonly used to transform the elements of an array. 

let Array2 = [1, 2, 3];
let newArray = Array2.map(function(element) {
  return element * 2;
});

console.log(newArray);

// Output
// [2, 4, 6]
//----------------------------------------------------------------------------------------------------------------------------

// reduce(): This method applies a function against an accumulator and each element in the array
// (from left to right) to reduce it to a single value. 
// It is commonly used to calculate a single value based on the elements of an array.

let Array3 = [1, 2, 3, 4, 5];
let sum = Array3.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});

console.log(sum);

// Output
// 15
//----------------------------------------------------------------------------------------------------------------------------

// includes(): This method determines whether an array includes a certain value among its entries.
// It is commonly used to check if an array contains a specific element.

let Array4 = ["apple", "banana", "orange"];
let containsBanana = Array4.includes("banana");

console.log(containsBanana);

// Output
// true
//----------------------------------------------------------------------------------------------------------------------------

// flat(): This method creates a new array with all sub-array elements concatenated
// into it recursively up to the specified depth. 
// It is commonly used to flatten an array that contains nested arrays.

let arr = [1, 2, [3, 4, [5, 6]]];
let flattenedArray = arr.flat(2);
console.log(flattenedArray);

// Output
// [1, 2, 3, 4, 5, 6]