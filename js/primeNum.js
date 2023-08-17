function main() {
    var num = 99;
    if(checkPrime(num))
    {
        console.log(num + " is a Prime Number");
    }
    else{
        console.log(num + " is Not a Prime Number");
    }
}

function checkPrime(num) {

    for(var i = 2; i < num; i++)
    {
        if(num % i == 0)
        {
            return false;
        }

    }
    
    return true;

}

main();