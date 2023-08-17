var student1 = {
    name: "Manish",
    age: 22,
    city: 'Bangalore',
    employee: true,
    id: 1,
    skills: ['html','css','js'],
    keyName: 'value'
};

console.log(student1);

//  Object always contain key value pair
//  it has the mapping of key and value
//  To access the properties use . operator - eg. var name = student1.name


// To print all the keys 
const allKeys = Object.keys(student1);
console.log("\nKeys:\n");
console.log(allKeys);


// To print all the values
const allValues = Object.values(student1);
console.log("\nValues:\n");
console.log(allValues);


