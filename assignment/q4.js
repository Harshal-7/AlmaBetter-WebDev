// Merge two sorted arrays into a single sorted array

function findIntersection(arr1, arr2)
{
    const intersection = [];
    for (let i = 0; i < arr1.length; i++)
    {
      for (let j = 0; j < arr2.length; j++)
      {
        if (arr1[i] === arr2[j] && !intersection.includes(arr1[i]))
        {
          intersection.push(arr1[i]);
        }
      }
    }
    return intersection;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
console.log(findIntersection(arr1, arr2));

/*
    The includes() method returns true if a string contains a specified string.
    Otherwise it returns false.
    The includes() method is case sensitive.

    let text = "Hello world, welcome to the universe.";
    let result = text.includes("world");    // TRUE
*/