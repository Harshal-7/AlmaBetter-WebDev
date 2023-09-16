function doubleNumber(arr)
{
    return arr.map(function(n){
        return n*2;
    })

    // return arr.map(n => n*2);    another way with arraow function
}

console.log(doubleNumber([2,4,15,6,6,8]));