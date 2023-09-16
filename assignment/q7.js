// Find the longest common Prefix

var strs =  ["flower", "flow", "flight"];
console.log(findLongestCommonPrefix(strs));

function findLongestCommonPrefix(strs) 
{


}

/*

Approach:
    1. if 0 elements in string return ""
    2. if 1 element in string return the element
    3. sort array in lexicographical order
    4. compare first element in string to last element in string by each character
    5. add matched characters in new string (finalStr)
    6. if mismatched return the <finalStr></finalStr>
*/

// Input:
// strs = ["flower", "flow", "flight"]
// Output:
// "fl"