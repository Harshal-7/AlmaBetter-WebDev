function isPalindrome(str) 
{
    str = str.toLowerCase();
    const cleanedStr = str.replace(/[^a-z0-9]/g,"");
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}

console.log(isPalindrome("Racecar"));