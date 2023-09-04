// setTimeout():
// This method is used to execute a function once after a specified delay (in milliseconds). 
// It takes two parameters: the function to be executed and the delay time.
// setTimeout(function, delay);

function greet() {
    console.log('This will appear next. Hello World!');
  }
  
  setTimeout(function() {
    console.log("This message appears after 3 seconds");
    greet();
  }, 3000);
  
  // Output
  "This message appears after 3 seconds"
  "This will appear next. Hello World!"