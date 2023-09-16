// The default sort 

let arr = [3, 56, -1, 0, -45, 899, 78]
let sorted = arr.sort();

console.log(sorted);    // [-1, -45, 0 ,3, 56, 78, 899]
// sort function sorts array in lexographical order
// which means it will sort the array as if it is a string 
// so the output will be [-1, -45, 0 ,3, 56, 78, 899]
// because -1 comes before -45 and 0 comes before 3


// so, following is the correct way for sorting the numbers array
let arr1 = [3, 56, -1, 0, -45, 899, 78]
let sorted1 = arr1.sort((a , b)=> a - b );

console.log(sorted1);