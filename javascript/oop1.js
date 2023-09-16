function Dog() 
{
    const name = 'Rex';
    const age = 2;
    const color = "brown";

    function description()
    {
        console.log(
            `This is ${name}, he is ${age} years old and his color is ${color}`
        )
    }

    function makeSound() 
    {
        if (age < 2) {
            console.log("barf .. barf");
        } else {
            console.log("woof .. woof");
        }
    }

    return{
        description: description,
        makeSound: makeSound
    };
} // returns an object

const myDog = Dog(); // call to Dog returns an object; hence myPet is an object
myDog.description();
myDog.makeSound();