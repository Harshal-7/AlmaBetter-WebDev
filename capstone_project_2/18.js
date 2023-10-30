function chunkArrayInGroups(arr, size) 
{
    // Break it up.
    const newArr = [];
    let i = 0;
  
    while (i < arr.length) {
      newArr.push(arr.slice(i, i + size));
      i += size;
    }
    return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5],2));
  
//   Input: arr = [0, 1, 2, 3, 4, 5], N = 2
// Output: [[0, 1], [2, 3], [4, 5]]