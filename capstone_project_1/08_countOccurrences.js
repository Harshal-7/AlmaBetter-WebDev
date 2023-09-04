function countOccurrences(str, char) 
{
    const regex = new RegExp(char,"g"); 
    const count = (str.match(regex) || []).length;       
    return count;
}

console.log(countOccurrences("hello world", "x"));

// Input: "hello world", "l"
// Output: 3

/*
    RegExp(pattern) returns a pattern 
    
    g : Find all matches rather than stopping after the first match.
    char : character that we want to find

    str.match(regex) is a string method : 
    The match() method matches a string against a regular expression **
    The match() method returns an array with the matches.
    The match() method returns null if no match is found.

    the retured array contains all the char found in string or null if no match is found
    so, we will take length of that array it will be the occurence counter

    we no match is found and retured value will be null so we can't get null.length 
    that's why if null then just take length of empty array i.e. 0 and return 0

*/