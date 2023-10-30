// var fairCandySwap = function(aliceSizes, bobSizes) {
//     let sumAlice = 0, sumBob = 0;
    
//     for(let i = 0; i < aliceSizes.length; i++) {
//         sumAlice += aliceSizes[i];
//     }
    
//     for(let i = 0; i < bobSizes.length; i++) {
//         sumBob += bobSizes[i];
//     }

//     // console.log(`sumAlice : ${sumAlice}`);
//     // console.log(`sumBob : ${sumBob}`);
    
//     let sum = (sumAlice + sumBob) / 2;
    
//     for(let i = 0; i < aliceSizes.length; i++) {
//         let a = aliceSizes[i];
        
//         let b = sum - (sumAlice - a);
        
//         if(bobSizes.includes(b))
//             return [a, b];
//     }
// };

var fairCandySwap = function(aliceSizes, bobSizes) 
{
    let sumAlice = aliceSizes.reduce((acc,curr) => acc + curr);
    let sumBob = bobSizes.reduce((acc,curr) => acc + curr);

    let targetSum = (sumAlice + sumBob) / 2;
    const aliceSet = new Set(aliceSizes);
    
    for(let i = 0; i < bobSizes.length; i++){
        let a = bobSizes[i];
        let b = targetSum - (sumBob - a);
        
        if(aliceSet.has(b)){
            return [a,b];
    }
    }
};

// console.log(fairCandySwap([1,1],[2,2]));
console.log(fairCandySwap([1,2],[2,3]));

// Input: aliceSizes = [1,1], bobSizes = [2,2]
// Output: [1,2]
// Input: aliceSizes = [1,2], bobSizes = [2,3]
// Output: [1,2]

/*
    The fairCandySwap function takes two arrays as input: aliceSizes and bobSizes.

    It calculates the sum of the elements in both aliceSizes and bobSizes using the reduce method and
    stores these sums in sumAlice and sumBob variables, respectively.

    The targetSum calculates the target sum, which is half of the combined sum of candies from both Alice and Bob.
    This target sum represents the amount that each person should have if the swap is fair.

    The code creates a set called aliceSet containing the elements from the aliceSizes array.
    This set will be used to quickly check if a specific candy size is owned by Alice.

    Next, there's a for loop that iterates through the bobSizes array to find a candy size a that Bob can give to Alice
    in exchange for a candy size b such that the total sum of Alice's candies and Bob's candies becomes equal to targetSum.

    Inside the loop, it calculates the potential candy size b that Alice should give to Bob. 
    This is done by subtracting the sum of Bob's candies (sumBob) minus the current candy size a from the targetSum. 
    This calculation assumes that if Bob gives candy a to Alice and receives candy b, the total sum should equal targetSum.

    It checks if the candy size b calculated in the previous step exists in the aliceSet 
    (i.e., Alice owns a candy of that size). If b is found in aliceSet, it means there is a fair swap, 
    so the function returns an array containing the candy sizes [a, b], where a is Bob's candy, and b is Alice's candy.

*/