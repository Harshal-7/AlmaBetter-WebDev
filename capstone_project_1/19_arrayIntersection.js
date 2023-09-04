// Array Intersection

function arrayIntersection(array1, array2) 
{
    let list = [];
    array1.sort((a,b)=>a-b);
    array2.sort((a,b)=>a-b);

    for(let i = 0; i < array1.length || i < array2.length; i++)
    {
        if(array1.includes(array2[i]) && !list.includes(array2[i]))
        {
            list.push(array2[i]);
        }
    }
    return list;
}

console.log(arrayIntersection([1, 2, 2, 3, 4, 5], [2, 3, 3, 6]));

// Input: [1, 2, 2, 3, 4, 5], [2, 3, 3, 6]
// Output: [2, 3]
// Input: [70, 20, 30, 50], [30, 40, 50, 60, 70]
// Output: [30, 50, 70]