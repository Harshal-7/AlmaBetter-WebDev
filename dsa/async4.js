// setInterval(): 
// This method is used to repeatedly execute a function with a fixed time delay between each execution. 
// It takes two parameters: the function to be executed and the time interval (in milliseconds).
// setInterval(function, interval);

function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var timeString = hours + ":" + minutes + ":" + seconds;
    console.log(timeString);
}

setInterval(displayTime, 3000);

// 21:27:50
// 21:27:53
// 21:27:56