// Callback Functions:
// JavaScript is a synchronous and single threaded language i.e. it can only do one thing at a time in specific order.
// But, with callback functions we can do asynchronous things in java-script.

setTimeout(function () {
    console.log("timer");
}, 5000);

function x(y)
{
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
});

// when you call the function and pass function inside another functin the function y is callback function
// function y is called back sometimes later in the code