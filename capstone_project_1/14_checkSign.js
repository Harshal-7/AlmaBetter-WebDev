// Check Sign

function checkSign(num1, num2, num3) 
{
    let str = "";

    if(num1 > 0 && num2 > 0 && num3 > 0){
        str = "+++";
    }else if(num1 > 0 && num2 > 0 && num3 < 0){
        str = "++-";
    }else if(num1 > 0 && num2 < 0 && num3 > 0){
        str = "++-";
    }else if(num1 < 0 && num2 > 0 && num3 > 0){
        str = "++-";
    }else if(num1 > 0 && num2 < 0 && num3 < 0){
        str = "+--";
    }else if(num1 < 0 && num2 < 0 && num3 > 0){
        str = "+--";
    }else if(num1 < 0 && num2 > 0 && num3 < 0){
        str = "+--";
    }else if(num1 < 0 && num2 < 0 && num3 < 0){
        str = "---";
    }
    return str;
}

console.log(checkSign(2,5,7));