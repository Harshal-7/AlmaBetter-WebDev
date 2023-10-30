function isPalindrome(n) {
    let num = String(n);
    let left = 0;
    let right = num.length - 1;

    while(left < right)
    {
        if(num[left] !== num[right])
        {
            return false;
        }
        ++left;
        --right;
    }
    return true;
}

console.log(isPalindrome(12321));
console.log(isPalindrome(1451));
console.log(isPalindrome(13311331));

/*
Input: 12321
Output: true
N
Input: 1451
Output: false

Input: 12345
Output: false

*/