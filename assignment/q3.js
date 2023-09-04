// Find the second smallest element in array

function findSeconSmallest(arr)
{
    const mySet = new Set(arr.sort((a,b) => a-b));
    const uniqueSortedArray = Array.from(mySet);

    if(uniqueSortedArray < 2)
    {
        return undefined;
    }
    
    return uniqueSortedArray[1];
}

console.log(findSeconSmallest([1,43,23,53,24,25,36,86,9,3,53]));