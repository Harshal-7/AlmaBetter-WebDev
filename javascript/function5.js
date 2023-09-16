// Input 5
// output 11
// (5 + 5) + 1

function multiply(n){
    return 2 * n
}

function add(n) {
    return n + 1
}

function compose(x, y) {
    // x = multiply
    // y = add
    return function(n) {
        // x(n) = 10
        return y(x(n))
    }
}

let multiplyAndAdd = compose(multiply,add)
var result = multiplyAndAdd(5)
console.log(result)