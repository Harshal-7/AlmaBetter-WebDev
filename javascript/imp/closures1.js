function x()
{
    function y()
    {
        console.log(num);   // 15  num is found in global Env. using the Lexical enviroment
    }
    y();
}

const num = 15;
x();


function fun()
{
    let a = 10;
    function gun(){
        return a;
    }
    return gun;
}
let z = fun();
console.log(z());