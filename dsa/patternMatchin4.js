// Naive String Matching Algorithm
// simplest approaches to find occurrences of a given pattern within a larger text (main string). 
// It works by comparing each character of the pattern with each character of the main string,
// character by character, starting from every position in the main string.

let mainString = "ABABABCABABABC";
let pattern = "ABABC";

console.log(naiveStringMatch(mainString,pattern));

function naiveStringMatch(mainString,pattern)
{
    let n = mainString.length;
    let m = pattern.length;
    let occurrences = [];

    for(let i = 0; i <= n-m; i++)
    {
        let j;
        for(j = 0; j < m; j++)
        {
            if(mainString[i+j] !== pattern[j])
            {
                break;
            }
        }
        if(j===m){
            occurrences.push(i);
        }
    }
    return occurrences;
}