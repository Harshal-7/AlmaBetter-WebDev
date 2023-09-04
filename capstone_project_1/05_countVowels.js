function countVowels(str) {
    // Write your code here
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    let count = 0;

    for (let i = 0; i < lowerStr.length; i++) 
    {
        if (vowels.includes(lowerStr[i])) 
        {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Coding is fun with fellow learners"));

// Input: "AlmaBetter"
// Output: 4
// Input: "Coding is fun with fellow learners"
// Output: 10