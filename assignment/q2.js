// Reverse an array in-place

function reverseArray(arr)
{
    let start = 0;
    let end = arr.length - 1;

    while(start < end)
    {
        [arr[start],arr[end]] = [arr[end],arr[start]]; // Swap elements using destructuring assignment 
        start++;
        end--;
    }
    return arr;
}

console.log(reverseArray([1,4,36,86,9,3,53]));


// let temp = arr[start];
// arr[start] = arr[end];
// arr[end] = temp;