
// Linear Search Approach
function transitionPointLS(arr) 
{
    let index = 0;

    for(let i of arr)
    {
        if(i === 1)
        {
            return index;
        }
        index++;
    }

    return -1;
}

// Binary Search Approach
function transitionPointBS(arr) 
{
    let left = 0;
    let right = arr.length - 1;

    while(left <= right)
    {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === 0)
        {
            left = mid + 1;
        }
        
        if(arr[mid] === 1)
        {
            return mid;
        }
    }

    return -1;
}

console.log(transitionPointBS([0,0,0,1,1]));
console.log(transitionPointBS([0,0,0,0]));

/*
Input: arr[] = [0,0,0,1,1]
Output: 3

Input: arr[] = [0,0,0,0]
Output: -1
*/