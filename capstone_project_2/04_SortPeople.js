var sortPeople = function(names, heights) {
    let length = heights.length;
    let map = new Map();
    
    for(let i=0; i<length; i++){
        map.set(heights[i], names[i]);      // created key value pair of height as key and names as value
    }

    heights.sort((a,b) => b-a);
    let res = [];
    
    for(let height of heights){
        res.push(map.get(height));          // we get value of specific key provided here we provide height & get specific name and then add them in the final array
    }
    
    return res;
};

var op1 = ["Mary","John","Emma"], h1 = [180,165,170];
var op2 = ["Alice","Bob","Bob"], h2 = [155,185,150];
var op3 =  ["Sarah", "David", "Lily"], h3 = [155, 160, 150];

console.log(sortPeople(op1,h1));
console.log(sortPeople(op2,h2));
console.log(sortPeople(op3,h3));


/*

Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.

Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

Input: names = ["Sarah", "David", "Lily"], heights = [155, 160, 150]
Output: ["David","Sarah","Lily"]
Explanation: When the heights [155, 160, 150] are sorted in descending order, the result is [160, 155, 150]. 

*/