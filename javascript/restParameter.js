/*
    Rest Parameter  =  represent an indefinite number of parameters
    ...     Packs Arguments Into Array                          */

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a,b,c));
console.log(sum(a,b,c,53,13));


function sum(...numbers) 
{
    let total = 0;
    for(let number of numbers)
    {
        total += number;
    }

    return total;    
}