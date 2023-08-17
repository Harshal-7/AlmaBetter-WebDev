let student = {
    Name : 'JJ',
    Age : 30,
    course : 'youtube',
    hobbies : 'boxing, sing, content-creation'
};

var convertToString = JSON.stringify(student);
console.log(convertToString);

// JSON is a string representation of an object
// In JSON the keys are always wrapped in double quotes
// and the values are either wrapped in double quotes or not
// This is also called serialization

var convertToObject = JSON.parse(convertToString);
console.log(convertToObject);

// This is also called deserialization
