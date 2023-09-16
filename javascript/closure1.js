function greet()
{
  var msg = "Hello";

  function sayHi()
  {
    console.log(msg);
  }
  // Here closure is created
  // sayHi function has access to mes variable

  return sayHi;
}
// Greet function is returning another function named sayHi
// sayHi is a function declared inside greet function

var fun = greet();  // return sayHi function
fun();  // sayHi function is called


console.log(msg);
// msg is not accessible here
// because msg is not in the global scope
// the reason it is not in the global scope is because
// greet function has returned and it's execution context
// has been removed from the stack

// msg here is also the private variable
// we call it as a private variable because it is not
// accessible outside the greet function