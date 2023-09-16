// IIFE
// Immediatly Invoke Function Expression
// Anonymous function and invoked immediatly

(function(){
    var x = "This is IIFE"; // This creates local scope even var cannot accessible outside
    var y = 2705;
    console.log(x);
    console.log(y);
})();