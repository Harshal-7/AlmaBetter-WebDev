var nums = [2,0,2,1,1,0];
let res = sortColors(nums);
console.log(res);

function sortColors(nums) 
{
    for(let i = 0; i < nums.length; i++)
    {
        for(let j = 0; j < nums.length - i - 1; j++)
        {
            if(nums[j] > nums[j+1])
            {
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
                flag = true;
            }
        }
    }

    return nums;

};