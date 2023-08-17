let employee = {
    name: 'John',
    age: 30,
    salary: 1000
}

let {salary, name} = employee;

// This is an example of destructuring assignment.
// We call this as destructuring because,
//we are destructuring the object employee into two variables salary and name

console.log(salary); // 1000
console.log(name); // John