function worstasteroidCollision(arr) 
{
    let hasNegative = arr.some(v => v < 0);

    while(hasNegative)
    {
        for(let i = 0; i < arr.length - 1; i++)
        {
            let j = i + 1;
    
            if((arr[i] > 0 && arr[j] > 0) || (arr[i] < 0 && arr[j] < 0))
            {
                continue;
            }
            else if(arr[i] + arr[j] === 0)
            {
                arr.splice(j,1);
                arr.splice(i,1);
            }
            else if(arr[i] > 0 && arr[j] < 0)
            {
                if(Math.abs(arr[i]) > Math.abs(arr[j]))
                {
                    arr.splice(j,1);
                }
                else if(Math.abs(arr[i]) < Math.abs(arr[j]))
                {
                    arr.splice(i,1);
                }
            }
            else if(arr[i] < 0 && arr[j] > 0)
            {
                if(Math.abs(arr[i]) > Math.abs(arr[j]))
                {
                    arr.splice(j,1);
                }
                else if(Math.abs(arr[i]) < Math.abs(arr[j]))
                {
                    arr.splice(i,1);
                }
            }
        }
        
        hasNegative = arr.some(v => v < 0);
        let hasPos = arr.some(v => v > 0);

        if(arr.size === 1 || hasNegative && hasPos === false)
        {
            break;
        }

    }

    return arr;
}


function bestasteroidCollision(arr) 
{


}

console.log(worstasteroidCollision([5,10,-5]));
console.log(worstasteroidCollision([8,-8]));
console.log(worstasteroidCollision([-11,10,2,-5]));
console.log(worstasteroidCollision([10,2,42,5,1,2]));


/*

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

*/

/*

we create a hasNegative variable to check whether the array contains 
any negative values if yes then we need to itterate through array again

inside while loop we iterate through array and check the conditions
provided in the question 

1. if astroid moving in same direction we continue the loop and go for the next element/astroid

2. if astroid of same size collide then both astroid disintegrate i.e we remove both elements from array 

3. In condition 3 and 4 we chech which astroid is smaller and which is greater 
   and based on that we conclude which astroid explode i.e which element to remove from array

4. after 1 iteration is complete we check if array contains diff direction astroids
    if yes then we iterate through array again
    if no then we check if all elements are negative 
        if all elements are negative then we break the loop
        (because same direction astroids do not collide)

5. we return the array

*/