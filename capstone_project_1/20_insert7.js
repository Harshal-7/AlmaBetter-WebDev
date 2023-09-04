// Insert 7

function insert7(inputString) 
{
    let iCnt = 1;
    let charArray = inputString.split('');

    for(let i = 0; i < charArray.length; i++,iCnt++)
    {
        if(charArray[i] === ' ')
        {
            --iCnt;
            continue;
        }
        else if(iCnt%7 == 0)
        {
            charArray.splice(i,0,'7');
        }
    }

    return charArray.join('');

}

console.log(insert7("ack Web Development"));

// Input: "Hello World and Universe!"
// Output: "Hello W7orld an7d Unive7rse!"
// Input: "Full Stack Web Development"
// Output: "Full St7ack Web7 Develo7pment"