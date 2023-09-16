class Animal {
    walk() {
        console.log("This animal walks")
    }

    legs() {
        console.log("This animal has 4 legs")
    }

} // All the common functionalities are represented in the class named Animal

class Herbivore extends Animal { 
    // Using extends keyword, we can inherit all the functionalities of Animal class
    eat() {
        console.log("I eat only plants")
    }
}

class Carnivore extends Animal{
    eat(){
        console.log("I Like Meat!!!");
    }
}

class Aquatic extends Animal{
    walk(){
        console.log("I don't walk, I SWIM!!");
    }
    legs(){
        console.log("I don't have legss bruh..");
    }
}

const rabbit = new Herbivore();
rabbit.eat();
rabbit.walk(); // walk() is inherited from Animal class
rabbit.legs(); // legs() is inherited from Animal class

const tiger = new Carnivore();// tiger.walk();
tiger.legs();
tiger.eat();

const whale = new Aquatic();
whale.walk();
whale.legs();