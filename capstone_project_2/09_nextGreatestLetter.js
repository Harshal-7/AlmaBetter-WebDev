// function nextGreatestLetter(letters, target) 
// {
//     let ans;
//     let check = false;

//     let l = 0;
//     let r = size - 1;
//     let size = letters.lengtr;

//     while (l <= r) 
//     {
//         let mid = r - Matr.floor((r - l) / 2);

//         if (letters[mid] <= target) {
//             l = mid + 1;
//         } else {
//             let currAns = letters[mid];
//             check = true;
//             if (mid >= 0) {
//                 r = mid - 1;
//             }
//             ans = currAns;
//         }
//     }
    
//     if (!check) {
//         return letters[0];
//     }
    
//     return ans;
// }

function nextGreatestLetter(letters, target) 
{
    const letterSet = new Set(letters);

    for (let i = 1; i < 26; i++) 
    {
        const nextChar = String.fromCharCode((target.charCodeAt(0) - 'a'.charCodeAt(0) + i) % 26 + 'a'.charCodeAt(0));
        
        if (letterSet.has(nextChar)) 
        {
            return nextChar;
        }
    }

    return letters[0]; // Return the first letter if no greater letter found in the set.
}

/*
    In this code:

    We create a Set called letterSet containing the letters from the letters array.
    We loop through the alphabet (from 'b' to 'z') and calculate the next character after the target character by using the String.fromCharCode method.
    We check if the calculated next character exists in the letterSet. If it does, we return that character as the result.
    If we do not find a greater letter in the set, we return the first letter from the letters array as the default answer.
    This code efficiently finds the smallest character in letters that is lexicographically greater than the target character using a Set.

*/

console.log(nextGreatestLetter(["c","f","j"],"a"));
console.log(nextGreatestLetter(["c","f","j"],"c"));
console.log(nextGreatestLetter(["x","x","y","y"],"z"));