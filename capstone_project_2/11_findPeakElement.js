function findPeakElement(nums) 
{
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right)
    {
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] >= nums[mid-1] && nums[mid] >= nums[mid+1])
        {
            return mid;
        }

        if(nums[mid] >= nums[mid-1])
        {
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }

    return -1;

}

console.log(findPeakElement([1,2,3,1]));
console.log(findPeakElement([1,2,1,3,5,6,4]));

/*
Time Complexity:
Time complexity of this code is O(log N), where N is the no. of elements in the nums array.
This is because the binary search algorithm repeatedly divides the search space in half,
and at each step, it eliminates half of the remaining elements.
In the worst case, you'll perform binary search until you find a peak element
or exhaust the search space, which takes logarithmic time.

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.

Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2,
or index number 5 where the peak element is 6.    
*/