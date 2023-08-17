function sum(a,b) {
    return a+b;
}

function sub(a,b) {
    return a-b;
}

function composeFunction(arg1,arg2) {
    var x = 103;
    var y = 53;

    var result1 = arg1(x,y);
    var result2 = arg2(x,y);

    console.log(result1);
    console.log(result2);

    return result1*result2;
}

console.log(composeFunction(sum,sub));