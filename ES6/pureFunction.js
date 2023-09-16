// First-Class Objects

const add = function(a, b) {
    return a + b;
};

const sub = function(a,b){
    return a - b;
}

function operateOnNumbers(a, b, operation) 
{
    return operation(a, b);
}
  
const result = operateOnNumbers(2, 3, add);
console.log(result);
const restul2 = operateOnNumbers(5,3,sub);
console.log(restul2);