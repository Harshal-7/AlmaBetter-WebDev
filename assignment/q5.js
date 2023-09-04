// Find the longest substring without repeating characters.

function longestSubstringWithoutRepeatingChar(str)
{
    let longest = "";

    for(let i = 0; i < str.length; i++)
    {
        let substring = "";

        for(let j = i; j < str.length; j++)
        {
            if(substring.includes(str[j]))      // if substring contain similar char then we break 
            {
                break;
            }
            substring += str[j];                // if not then we add that char to our substring
        }

        if(substring.length > longest.length)
        {
            longest = substring;
        }
    }

    return longest;
}

console.log(longestSubstringWithoutRepeatingChar("abcdbcbbdforealafafdfasd"));
