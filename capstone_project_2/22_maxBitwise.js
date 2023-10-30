function worstmaxBitwise(nums)
{
    if (nums.length < 2) 
    {
        return null; // Not enough numbers to form a pair
    }

    let maxBitwiseAnd = 0;
    const maxInteger = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < nums.length - 1; i++)
    {
        for (let j = i + 1; j < nums.length; j++)
        {
            const bitwiseAnd = nums[i] & nums[j]; // Bitwise AND of two numbers
            if (bitwiseAnd > maxBitwiseAnd && bitwiseAnd !== maxInteger) 
            {
                maxBitwiseAnd = bitwiseAnd;
            }
        }
    }

    return maxBitwiseAnd;
}

function bestmaxBitwise(nums) 
{
    if (nums.length < 2)
    {
        return null; // Not enough numbers to form a pair
    }
    
    let maxBitwiseAnd = 0;

    for (let i = 0; i < nums.length - 1; i++)
    {
        for (let j = i + 1; j < nums.length; j++)
        {
            // Check if both numbers have a leading 1 bit at the same position
            if ((nums[i] & nums[j]) > maxBitwiseAnd)
            {
                maxBitwiseAnd = nums[i] & nums[j];
            }
        }
    }

    return maxBitwiseAnd;
}

  

const example1 = [2, 3, 4, 5, 6];
const example2 = [10, 12, 6, 8];

const output1 = bestmaxBitwise(example1);
const output2 = bestmaxBitwise(example2);
const output3 = worstmaxBitwise(example1);
const output4 = worstmaxBitwise(example2);

console.log(output1); 
console.log(output2); 
console.log(output3); 
console.log(output4); 
