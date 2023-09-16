const person = {
    name: 'John',
    age: 30
};
  
const updatedPerson = {
    ...person,
    age : 50,
    address : 'gurugram'
};

console.log(updatedPerson);


// Objects & Arrays are mutable in js
// we can change person.age = 50; but instead we create new object and update the value in that new object
// Instead of changing the original object, the code that follows generates a new object with the updated property: