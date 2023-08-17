main();

function main() {
    var num = parseInt(readLine());
    console.log(checkNum(num));
}

function checkNum(num) {
    
    if(num == 0)
    {
        return "Zero";
    }
    else if(num > 0)
    {
        return "Positive";
    }
    else{
        return "Negative";
    }
}