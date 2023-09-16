function Dog() {
  const name = "Buzo";
  const age = 3;
  const color = "black";

  function desc() {
    console.log(`This is ${name} , He is ${age} years old and his color is ${color}`);
  }

  return{
    desc : desc,
  }

}

const myDog = Dog();
myDog.desc();
