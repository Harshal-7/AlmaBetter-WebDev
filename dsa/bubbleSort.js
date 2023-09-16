function bubbleSort(arr, n)
{
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n - i - 1; j++)
        {
            if(arr[j] > arr[j+1])
            {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3, 9, 8, 10, 7, 1],6));