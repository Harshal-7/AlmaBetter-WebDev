// One function's output is another function's input

const double = x => x*2;
const square = y => y*y;

const result1 = double(2);          // it returns 2*2 = 4
const result2 = square(result1);    // it return 4^4 = 16
console.log(result2);

// another way of writing the function composition code:
const result = square(double(5));   // double and then sqaure
console.log(result);