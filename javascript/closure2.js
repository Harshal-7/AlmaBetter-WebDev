function Dog() {
  const name = "Buzo";
  const age = 3;
  const color = "black";
  const sound = "woof";

  function bark() {
      console.log(sound);
  }

  function getAge() {
      console.log(age);
  }

  function getColor() {
      return color;
  }

  return {
      bark: bark,
      getAge: getAge,
      getColor: getColor
  } // this is an object
    // which has bark, getAge, getColor as properties
}
const myDog = Dog(); // myDog is an object, because the call to Dog() returns an object
myDog.bark(); // woof
myDog.getAge(); // 3

var color = myDog.getColor();
console.log(color);