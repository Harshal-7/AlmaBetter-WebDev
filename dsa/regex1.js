// Regex Email

let mail = "abcd@gmail.com";
let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let result = regex.test(mail);
// console.log(result);

// ---------------------------------------------------------------------------

function isValidEmail(email)
{
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}

console.log(isValidEmail("harsheuu@gmail.com"));
console.log(isValidEmail("aech@hotmail.cm"));
console.log(isValidEmail("aech#hotmail.com")); 


