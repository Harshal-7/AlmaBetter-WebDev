function sortColors(nums)
{
    let redPtr = 0;
    let whitePtr = 0;
    let bluePtr = nums.length - 1;

    while(whitePtr <= bluePtr)
    {
        if(nums[whitePtr] === 0)
        {
            [nums[whitePtr],nums[redPtr]] = [nums[redPtr],nums[whitePtr]];
            whitePtr++;
            redPtr++;
        }
        else if(nums[whitePtr] === 2)
        {
            [nums[whitePtr],nums[bluePtr]] = [nums[bluePtr],nums[whitePtr]];
            bluePtr--;
        }
        else{
            whitePtr++;
        }
    }  
    return nums;
}

console.log(sortColors([2,0,2,1,1,0]));
console.log(sortColors([2,0,1]));

/*
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Input: nums = [2,0,1]
Output: [0,1,2]
*/