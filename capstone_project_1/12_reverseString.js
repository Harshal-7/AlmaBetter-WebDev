// Character Reversal 

function reverseString(str) 
{
    let n = str.length - 1;
    let ret = "";
    while(n >= 0)
    {
        ret += str[n];
        --n;
    }
    return ret;
}

console.log(reverseString("JavaScript"));