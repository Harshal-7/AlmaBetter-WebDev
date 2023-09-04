function findMove(s) 
{
    let arr = [];
    for(let i = 1; i < s.length; i++)
    {
        let temp = s;
        if(s[i] === '+' && s[i-1] === '+')
        {
            temp = replaceAt(temp,i-1,'-');
            temp = replaceAt(temp,i,'-');
            arr.push(temp);
        }
    }
    return arr;
}

function replaceAt(str,index,ch)
{
    if(index > str.length-1) return str;
    return str.substring(0,index) + ch + str.substring(index+1);
}

console.log(findMove("++++"));

// Input: "++++"
// Output: ["--++", "+--+", "++--"]
// Input: "++-++"
// Output: ["---++", "++---"]