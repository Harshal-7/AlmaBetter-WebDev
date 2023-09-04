// Merge two sorted arrays into a single sorted array

function findIntersection(arr1, arr2)
{
  const set1 = new Set(arr1); // Create a set from arr1
  const intersection = [];

  for (let i = 0; i < arr2.length; i++)
  {
    if (set1.has(arr2[i])) 
    {
      intersection.push(arr2[i]);
      set1.delete(arr2[i]); // Remove the element from set1 to handle duplicates
    }
  }

  return intersection;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
console.log(findIntersection(arr1, arr2));

/*
    The has() method of Set instances returns a boolean indicating whether
    an element with the specified value exists in this set or not.
    Time Complexity: O(n + m)

*/