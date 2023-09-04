// Swap Consecutive Character

function swapConsecutiveCharacters(str) 
{
    let charArray = str.split('');

    for(let i = 0; i < str.length-1; i+=2)
    {
        let temp = charArray[i];
        charArray[i] = charArray[i+1];
        charArray[i+1] = temp;
    }

    return charArray.join('');

}

console.log(swapConsecutiveCharacters("AlmaBetter"));

// Input: "AlmaBetter"
// Output: "lAameBttre"