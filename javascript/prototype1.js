// Inherit properties of one object in another object
let lifeSpan = {
    lifeSpan(age){
        if(age <= 20)
        {
            console.log("My lifespan is shorter :(");
        }
        else if(age > 20)
        {
            console.log("Yehh I live a long life :)");
        }
    }
}

let animal = {
    eats : true,
    walk(){
        console.log("Animal walks");
    },
    __proto__ : lifeSpan
}

let rabbit = {
    jumps : true,
    __proto__ : animal
}

console.log(rabbit.jumps);
console.log(rabbit.eats);
rabbit.walk();
rabbit.lifeSpan(15);