// Sign of Product

function signOfProduct(nums) 
{
    let product = 1;
    for(let n of nums){
        product *= n;
    }

    if(product === 0){
        return 0;
    }
    else if(product < 0){
        return -1;
    }
    else{
        return 1;
    }
}

console.log(signOfProduct([2,0,3,4,5]));