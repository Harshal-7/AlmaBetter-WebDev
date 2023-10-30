function letterCombinations(digits) 
{
    if (!digits) return [];
    const keypad = {
      '2': 'abc', '3': 'def', '4': 'ghi',
      '5': 'jkl', '6': 'mno', '7': 'pqrs',
      '8': 'tuv', '9': 'wxyz'
    };
    const result = [];
  
    function backtrack(index, combination) 
    {
        if (index === digits.length) 
        {
            result.push(combination);
            return;
        }
  
        const letters = keypad[digits[index]];
        for (let letter of letters) 
        {
            backtrack(index + 1, combination + letter);
        }
    }
  
    backtrack(0, '');
    return result;
}
    
function combinationSum(nums, target) {
    const result = [];
  
    function backtrack(start, currentSum, path) {
      if (currentSum === target) {
        result.push([...path]);
        return;
      }
      
      for (let i = start; i < nums.length; i++) {
        if (currentSum + nums[i] <= target) {
          path.push(nums[i]);
          backtrack(i, currentSum + nums[i], path);
          path.pop();
        }
      }
    }
  
    backtrack(0, 0, []);
    return result;
}

function wordBreak(s, wordDict) 
{
    const memo = new Map();
  
    function backtrack(start) 
    {
        if (start === s.length) return true;
        if (memo.has(start)) return memo.get(start);

        for (let end = start + 1; end <= s.length; end++) 
        {
            const word = s.slice(start, end);
            if (wordDict.includes(word) && backtrack(end)) 
            {
                memo.set(start, true);
                return true;
            }
        }
  
        memo.set(start, false);
        return false;
    }
  
    return backtrack(0);
}