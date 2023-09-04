//  Find maximum element in array+

function maxEle(arr)
{
    if(arr.length === 0)
    {
        return "Empty Array";
    }

    let max = arr[0];
    for(let i = 1; i < arr.length; i++)
    {
        if(arr[i] > max)
        {
            max = arr[i];
        }
    }
    return max;
}

console.log(maxEle([1,43,23,53,24,25,36,86,9,3,53]));