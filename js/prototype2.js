function Animal(){
    this.walk = function(){
        console.log("I'm Walking");
    }
}

function Herbivore(){
    this.eat = function(){
        console.log("I only eat Plants");
    }
}

Herbivore.prototype = new Animal();
const rabbit = new Herbivore();
rabbit.walk();