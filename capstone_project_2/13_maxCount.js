function maxCount(nums) 
{
    let pos = 0;
    let neg = 0;

    for(let no of nums)
    {
        if(no < 0)
        {
            neg++;
        }
        else if(no > 0)
        {
            pos++;
        }
    }
    
    return Math.max(pos,neg);

}

console.log(maxCount([-2,-1,-1,1,2,3]));
console.log(maxCount([-3,-2,-1,0,0,1,2]));
console.log(maxCount([-55,-51,-23,-12,0,5,20,66,1314]));

/*
Input: nums = [-2,-1,-1,1,2,3]
Output: 3
Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.

Input: nums = [-3,-2,-1,0,0,1,2]
Output: 3
Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.

Input: nums = [5,20,66,1314]
Output: 4
Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.

*/