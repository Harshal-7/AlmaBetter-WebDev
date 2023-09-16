var str = "hello world";
var pattern = "abc";

console.log(patternMatching(str, pattern));

function patternMatching(str, pattern)
{
    let regex = new RegExp(pattern);
    let ret  = str.match(regex);

    if(ret === null)
    {
        return false;
    }
    else if(ret.length !== 0 && ret[0] === pattern)
    {
        return true;
    }
    else{
        return false;
    }
    
}