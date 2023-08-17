function greaterThan(n) {
    return function(m) {
        return m > n;
    };
}

var greaterThanTen = greaterThan(10);
var result1 = greaterThanTen(11)
console.log(result1)

var result2 = greaterThanTen(9)
console.log(result2)

var gThan34 = greaterThan(34);
var ans = gThan34(42);
console.log(ans);

/*

A Higher-Order Function (HOF) in JavaScript is a function that does at least one of the following:

    1. Takes one or more functions as arguments.
    2. Returns a function as its result.

So, while it's common for higher-order functions to accept other functions as arguments, it's not a requirement.
A function can be considered a higher-order function if it returns a function,
even if it doesn't accept any function as an argument. 

*/