function worstfindRelativeRanks(score) 
{
    const n = score.length;
    const result = [];

    for (let i = 0; i < n; i++) 
    {
        let rank = 1;
        
        for (let j = 0; j < n; j++) 
        {
            if (score[j] > score[i]) 
            {
                rank++;
            }
        }
        
        if (rank === 1) {
            result.push("Gold Medal");
        } else if (rank === 2) {
            result.push("Silver Medal");
        } else if (rank === 3) {
            result.push("Bronze Medal");
        } else {
            result.push(rank.toString());
        }
    }
    return result;
}

function bestfindRelativeRanks(score) 
{
    const sortedScores = [...score];
    sortedScores.sort((a, b) => b - a);
    const rankMap = new Map();

    for (let i = 0; i < sortedScores.length; i++) 
    {
        if (i === 0) {
            rankMap.set(sortedScores[i], "Gold Medal");
        } else if (i === 1) {
            rankMap.set(sortedScores[i], "Silver Medal");
        } else if (i === 2) {
            rankMap.set(sortedScores[i], "Bronze Medal");
        } else {
            rankMap.set(sortedScores[i], (i + 1).toString());
        }
    }

    const result = [];
    for (const scoreValue of score) 
    {
        result.push(rankMap.get(scoreValue));
    }

    return result;
}

console.log(worstfindRelativeRanks([10,3,8,9,4]));
console.log(bestfindRelativeRanks([10,3,8,9,4]));


console.log(worstfindRelativeRanks([5,4,3,2,1]));
console.log(bestfindRelativeRanks([5,4,3,2,1]));

// Input: score = [5,4,3,2,1]
// Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].

// Input: score = [10,3,8,9,4]
// Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].