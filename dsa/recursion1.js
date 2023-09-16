function fibNumber(n)
{
    if(n == 0 || n == 1)
    {
        return 1;
    }

    return fibNumber(n-1) + fibNumber(n-2);

}


let n = 7;
console.log(fibNumber(n));