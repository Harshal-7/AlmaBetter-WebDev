let slippers = [10,7,53,12,64,91,3,25,6,25,14];
let ans = sortSlippers(slippers);
console.log(ans);

function sortSlippers(slippers)
{
    var len = slippers.length;

    for(let i = 0; i < len; i++)
    {
        for(let j = i; j < len-1; j++)
        {
            if(slippers[i] > slippers[j+1])
            {
                let temp = slippers[i];
                slippers[i] = slippers[j+1];
                slippers[j+1] = temp;
            }

        }
    }

    return slippers;

}

