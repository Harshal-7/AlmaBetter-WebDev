function findLongestWord(sentence) 
{
    const words = sentence.split(' ');
    let maxLength = 0;

    for(let word of words)
    {
        const length = word.length;
        if(length > maxLength)
        {
            maxLength = length;
        }
    }

    return maxLength;
}

console.log(findLongestWord("Coding is fun with fellow learners"));

// Input: 