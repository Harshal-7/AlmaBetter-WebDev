function isHappy(n) {
    // Helper function to calculate the sum of squares of digits
    function calculateSumOfSquares(num) 
    {
        let sum = 0;
        while (num > 0) 
        {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    // let slow = n;   // 4
    // let fast = n;   // 4

    // do {
    //     slow = calculateSumOfSquares(slow);
    //     fast = calculateSumOfSquares(calculateSumOfSquares(fast));
    // } while (slow !== fast);

    // return slow === 1;

    const seen = new Set();
    while (n !== 1 && !seen.has(n)) 
    {
        seen.add(n);
        n = calculateSumOfSquares(n);
    }

    return n === 1;
}

console.log(isHappy(19));
console.log(isHappy(4));
console.log(isHappy(7));

/*
Input: n = 19
Output: true
Explanation: 
    1^2 + 9^2 = 1 + 81 = 82
    8^2 + 2^2 = 64 + 4 = 68
    6^2 + 8^2 = 36 + 64 = 100
    1^2 + 0^2 + 0^2 = 1
    The process ends with 1, so 19 is a happy number.

Input: n = 4
Output: false

Input: n = 7
Output: true

 we created set named seen to keep track of the numbers encountered during the calculation. 
 It continues the calculation until either n becomes 1 (indicating a happy number) 
 or a number is encountered that has already been seen 
 (indicating a cycle and therefore not a happy number).
*/