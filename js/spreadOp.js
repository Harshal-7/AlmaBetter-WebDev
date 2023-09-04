/*
    Spread Operator allows and iterable such as an array or string
    to be expanded in places where zero or more arguments are expected 
    ...     It Unpacks The Elements
*/

let numbers = [1,2,3,4,5,6,7,8,9,10];
// let maximum = Math.max(numbers);    // NaN
let maximum = Math.max(...numbers);
console.log(maximum);

/*----------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------*/

let class1 = ["Jett", "Phoenix", "Harbor"];
let class2 = ["Viper", "Brimstone", "Yoru"];

// class1.push(class2);    //  [ 'Jett', 'Phoenix', 'Harbor', [ 'Viper', 'Brimstone', 'Yoru' ] ]
class1.push(...class2)

console.log(class1);        // [ 'Jett', 'Phoenix', 'Harbor', 'Viper', 'Brimstone', 'Yoru' ]
console.log(...class1);     // Jett Phoenix Harbor Viper Brimstone Yoru 