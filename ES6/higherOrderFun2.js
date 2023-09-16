// Higher Order Function

function add(x){
    return function(y){     // No names are given to higher order function
        return x + y;
    }
}

var sum = add(60);      // add functino returns a function to sum
var total = sum(9);     // sum is a function which contains a function returned by add (i.e:  x + y)
console.log(total);

var sum2 = add(2)(3);   // Another method for calling HOF
console.log(sum2);