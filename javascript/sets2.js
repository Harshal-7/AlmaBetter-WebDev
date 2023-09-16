let list = [1,1,1,1,2,4,5,2,2,5,3];

let obj = {};

for(let item of list)
{
    let doesExist = obj[item];

    if(doesExist)
    {
        obj[item] = doesExist + 1;
    }
    else
    {
        obj[item] = 1;
    }
}

console.log(obj);

/*

let listWithDuplicateValues = [1,1,1,1,2,3,4,5,6,5];
let frequencyMap = {};

for(let i = 0; i < listWithDuplicateValues.length; i++)
{
    let item = listWithDuplicateValues[i];
    let itemFromFrequencyMap = frequencyMap[item];

    if(itemFromFrequencyMap) { 
        // this if statement will be true if the item 
        // is not undefined (which means that the item is already present in the frequency map)
        
        frequencyMap[item] = itemFromFrequencyMap + 1;
        
        // This means that the item is already present in the frequency map
        // and we need to increment the frequency
    }
    else 
    {
        frequencyMap[item] = 1; // This will be the initial frequency
    }
}
console.log(frequencyMap)

*/