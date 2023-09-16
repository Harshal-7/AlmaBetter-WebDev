setTimeout(function(){
    console.log("File has been downloaded!!");
}, 5000);

while(true)
{
    console.log("downloding");
}

// After completing sync code asyn code will run 
// asyn will not run in between while the syn code is still running
// Here even after 5 second the setTimeout funciton will not run because 
// the infinite while loop is running and is not completed