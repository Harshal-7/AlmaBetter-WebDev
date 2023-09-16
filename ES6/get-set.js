const person = {
    _age: 30,
    set age(newAge) {
        if (newAge >= 0 && newAge <= 120) {
            this._age = newAge;
        } else {
            console.log("Invalid age value");
        }
    }
};
  
person.age = 25; // Sets the age property using the setter
console.log(person._age); // 25

person.age = 150; // Attempts to set an invalid age (will be rejected by the setter)
console.log(person._age); // 25