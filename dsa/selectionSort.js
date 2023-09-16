function selectionSort(arr,  n)
{
    for(let i = 0; i < n; i++)
    {
        let min = i;

        for(let j = i + 1; j < n; j++)
        {
            if(arr[min] > arr[j])
            {
                let temp = arr[min]
                arr[min] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(selectionSort([33, 66, 99, 88, 11],5));