function isPalindrome(str)
{
    str = str.toLowerCase();
    let regex = /[^a-z0-9]+/ig;
    let newStr = str.replace(regex,"");
    let n = newStr.length;

    for(let i = 0,j = n-1; i < j; i++,j--)
    {
        if(newStr[i] !== newStr[j])
        {
            return false;
        }
    }
    return true;
}

let str = "A man, a plan, a canal: Panama";
let result = isPalindrome(str);

if(result)console.log("String is a Palindrome string");
else console.log("String is not a Palindrome string");