//  Callback Function  :  A function passed as an argument to another function

//  Ensures that function is not going to run before a task is completed.
//  Helps us develope Asynchronous code .
//  (When one funciton has to wait for another function)
//  That help us avoid errors and potential problems.
//  Eg. Wait for a file to load.

sum(2,4,displayConsole);

function sum(x,y,callBack)
{
    let result = x + y;
    callBack(result);
}

function displayConsole(output)
{
    console.log(output);
}