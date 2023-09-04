function task(message){
    n = 2000000000;
    while(n > 0){
        n--;
    }
    console.log(message);
}

console.log('Downloading the task...');

setTimeout(() => {
    task("Download Completed...");
}, 0);

(function(){
    let a = 10;
    let b = 90;
    let sum = a + b;
    console.log(`Addition of the numbers is ${sum}`);
})();


// function task2(){
//     n = 2000000000;
//     while(n > 0){
//         n--;
//     }
//     console.log("completed...");
// }

// setTimeout(task2,0);
