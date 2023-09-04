const regex = /\d{2}-\d{2}-\d{4}/;
const str = "My birth date is 27-05-2002";

const test = regex.test(str);
console.log(test);

const match = str.match(regex);
console.log(match);