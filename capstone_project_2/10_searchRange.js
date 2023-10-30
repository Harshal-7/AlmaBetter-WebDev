// var searchRange = function(nums, target) 
// {
//     var ans=[];
//     for(let i=0;i<nums.length;i++){
//       if(nums[i]==target){
//           ans.push(i);
//           break;
//       }
//     }
//     for(let i=nums.length-1;i>=0;i--){
//       if(nums[i]==target){
//           ans.push(i);
//           break;
//       }
//     }
//     if(ans.length==0){
//     ans.push(-1);
//     ans.push(-1);
//     }
//     return ans;
// };

var searchRange = function(nums, target) 
{
    function findFirstOccurence(nums,target)
    {
        let left = 0;
        let right = nums.length - 1;
        let firstOcc = -1;

        while(left <= right)
        {
            let mid = Math.floor((left+right)/2);

            if(nums[mid] >= target){
                right = mid - 1;
            }
            else{
                left = mid + 1;
            }

            if(nums[mid] === target){
                firstOcc = mid;
            }

        }
        return firstOcc;
    }

    function findLastOccurence(nums,target)
    {
        let left = 0;
        let right = nums.length - 1;
        let lastOcc = -1;

        while(left <= right)
        {
            let mid = Math.floor((left + right)/2);

            if(nums[mid] <= target){
                left = mid + 1;
            }
            else{
                right = mid - 1;
            }

            if(nums[mid] === target){
                lastOcc = mid;
            }
        }
        return lastOcc;
    }
    
    const firstOccurence = findFirstOccurence(nums,target);
    const lastOccurence = findLastOccurence(nums,target);

    return [firstOccurence,lastOccurence];
    
};


console.log(searchRange([5,7,7,8,8,10],8));
console.log(searchRange([5,7,7,8,8,10],6));
console.log(searchRange([],0));

/*
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Input: nums = [], target = 0
Output: [-1,-1]
*/