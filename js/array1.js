var list = [
    [1, 2, 3, 4], // 0th index
    [100, 101, 102, 199], // 1st index
    [201, 202, 203, 299], // 2nd index
]; // multi-dimensional array

// also called a matrix
// above is a 3x4 matrix

var array1 = list[0];
console.log(array1);

var numberX = array1[1];
console.log(numberX);

var arrayY = list[2];
console.log(arrayY);

var numberZ = arrayY[3]; // 4th index inside arrayY
console.log(numberZ);

console.log(list[1][0])