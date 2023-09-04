// Shortest Word Distance

function shortestDistance(wordsDict, word1, word2) 
{
    let min = Infinity, position1 = -1, position2 = -1;

    for(let i = 0; i < wordsDict.length; i++)
    {
        if(wordsDict[i] === word1)
        {
            position1 = i;
        }
        
        if(wordsDict[i] === word2)
        {
            position2 = i;
        }

        if(position1 !== -1 && position2 !== -1)
        {
            min = Math.min(min,Math.abs(position1 - position2));
        }
    }
    return min;
}

// const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
const wordsDict = ["apple", "banana", "cherry", "apple", "date", "banana", "fig"];
console.log(shortestDistance(wordsDict, "apple", "fig"));


// Input: wordsDict, "apple", "fig"
// Output: 3
// Input: wordsDict, "coding", "makes"
// Output: 1