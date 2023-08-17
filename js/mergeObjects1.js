let student = {
    name : 'Andres',
    age : 37,
    city : 'New York'
};

let studentParentInfo = {
    fatherName : 'John',
    motherName : 'Lisa'
};

// To merge the two objects we can use '...' i.e. 'Spread Operator'
// Spreads the key-values of all the object we have given and combines them and create a new object
let mergeObject = {
    ...student,
    ...studentParentInfo
};

console.log(mergeObject);