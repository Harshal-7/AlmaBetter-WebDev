var id = 1;
var intervalID = null;

var check = function(){
    if(id <= 10)
    {
        console.log(id);
        id++;
    }
    else
    {
        clearInterval(intervalID);
    }

}

intervalID = setInterval(check,1000);


// Here setInterval() returns an interval ID, which you can pass to clearInterval():
// we can add condition and exit setInterval