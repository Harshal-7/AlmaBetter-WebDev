var size = 2;
var arr = [1,2,3,4,5];
console.log(chunk(arr, size));

function chunk(arr, size){
    let resArr = [];
    let tempArr = [];

    for (let i = 0; i < arr.length; i++) 
    {
        tempArr.push(arr[i]);

        if (tempArr.length == size)
        {
            resArr.push(tempArr);
            tempArr = [];
        }
    }

    if (tempArr.length)
    {
        resArr.push(tempArr);
    }

    return resArr;
};