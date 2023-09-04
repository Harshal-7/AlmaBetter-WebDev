function fun(nums1, nums2)
{
	nums1.sort((a,b) => a-b);
	nums2.sort((a,b) => a-b);

	var sameEle = nums1.some(item => nums2.includes(item))
	var sameEleArray = [];

    if(nums1.length >= nums2.length)
    {
        var minArrayLength = nums2.length;
    }
    else
    {
        var minArrayLength = nums1.length;
    }

	if(sameEle == true)
	{
		for(let i = 0; i < minArrayLength; i++)
		{
			for(let j = 0; j < minArrayLength; j++)
			{
				if(nums1[i] == nums2[j])
				{
					sameEleArray.push(nums1[i]);
				}
			}
		}
		sameEleArray.sort((a,b) => a-b);
        return sameEleArray[0];
	}

	let a = nums1[0];
	let b = nums2[0];
	let ret = a + "" + b;
	return ret;
};

let nums1 = [3,5,2,6];
let nums2 = [3,1,7];

let ans = fun(nums1,nums2);
console.log(ans);