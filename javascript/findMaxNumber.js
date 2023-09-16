let inp = [10, 7, 54, 23, 46, 25, 14];
let ans = findMaxNumber(inp);
console.log(ans);

function findMaxNumber(inp)
{
    if(inp.length == 0)
    {
        return 0;
    }

    let max = inp[0];

    for(let i = 0; i < inp.length; i++)
    {
        if(inp[i] > max)
        {
            max = inp[i];
        }
    }

    return max;
}