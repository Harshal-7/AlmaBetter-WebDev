function minimumSum(num)
{
    const digits = num.toString().split('').sort();

    const new1 = [];
    const new2 = [];
  
    digits.forEach((digit, index) => {
      if (index % 2 === 0) {
        new1.push(digit);
      } else {
        new2.push(digit);
      }
    });

    const new1Int = parseInt(new1.join(''));
    const new2Int = parseInt(new2.join(''));
  
    return (new1Int + new2Int);
}

console.log(minimumSum(2932));
console.log(minimumSum(4009));

/*
Input: num = 2932
Output: 52
Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.

Input: num = 4009
Output: 13
Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc.
The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.
*/
