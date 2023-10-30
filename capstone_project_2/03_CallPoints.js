var callPoints = function(operations) {
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "+") {
            sum = operations[i - 2] + operations[i - 1];
            operations[i] = sum;
        } else if (operations[i] === "D") {
            newD = operations[i - 1] * 2;
            operations[i] = newD;
        } else if (operations[i] === "C") {
            operations.splice(i - 1, 2);
            i = i - 2;
        } else {
            var integer = +operations[i];
            operations[i] = integer;
        }
    }

    // to calculate the totalSum only
    let totalSum = 0;
    for (let i = 0; i < operations.length; i++) {
        totalSum += operations[i];
    }

    return totalSum;
};

var ops1 = ["5","-2","4","C","D","9","+","+"]
var ops2 = ["1","C"];
console.log(callPoints(["5","2","C","D","+"]));
console.log(callPoints(ops1));
console.log(callPoints(ops2));

/*
Input: ops = ["5","2","C","D","+"]
Output: 30
Explanation:
"5" - Add 5 to the record, record is now [5].
"2" - Add 2 to the record, record is now [5, 2].
"C" - Invalidate and remove the previous score, record is now [5].
"D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.

Input: ops = ["1","C"]
Output: 0

Input: ops = ["5","-2","4","C","D","9","+","+"]
Output: 27
*/