var findErrorNums = function(nums) {
    const hashmap = new Map();
    const output = [];
    let maxValue = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (hashmap.has(num)) output.push(num);
        hashmap.set(num, i);
        maxValue = Math.max(maxValue, num);
    }

    for (let i = 1; i <= maxValue + 1; i++) {
        if (!hashmap.has(i)) {
            output.push(i);
            break;
        }
    } 

    return output;
};
var op1 = [1, 2, 2, 4]
var op2 = [3, 2, 3, 4, 5]
var op3 = [1, 2, 3, 4, 5, 6, 7, 8, 8]

console.log(findErrorNums(op1));
console.log(findErrorNums(op2));
console.log(findErrorNums(op3));


/*
Input: [1, 2, 2, 4]
Output: [2, 3]
Explanation: The duplicated number is 2, and the missing number is 3.

Input: [3, 2, 3, 4, 5]
Output: [3, 1]
Explanation: The duplicated number is 3, and the missing number is 1.

Input: [1, 2, 3, 4, 5, 6, 7, 8, 8]
Output: [8, 9]
Explanation: The duplicated number is 8, and the missing number is 9.

*/