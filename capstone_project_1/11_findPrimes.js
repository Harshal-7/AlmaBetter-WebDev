// Find Prime Number

function findPrimes(n) 
{
    let primeNo = [];
    
    for(let i = 2; i <= n; i++)
    {
        let flag = true;

        for(let j = 2; j <= i/2; j++)
        {
            if(i % j === 0)
            {
                flag = false;
                break;
            }
        }
        if(flag)
        {
            primeNo.push(i);
        }
        
    }
    
    return primeNo;
    
}

console.log(findPrimes(32));