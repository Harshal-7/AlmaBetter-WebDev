// Find first 7 fib num
// 0 1 1 2 3 5 8 13 ...


function fibNum(num1,num2,n,i)
{
    add = num1 + num2;
    num1 = num2;
    num2 = add;

    if(i == n)
    {
        return add;
    }

    fibNum(num1,num2,n,++i);

    return add;
}

var add = 0;
var ret = fibNum(0,1,8,3);
console.log(ret);