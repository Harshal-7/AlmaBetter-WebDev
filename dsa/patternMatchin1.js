function isValidEmail(email) 
{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const email1 = "michael.scott@gmail.com";
const email2 = "pam.beesly_gmail.com";

console.log(isValidEmail(email1));
console.log(isValidEmail(email2));

/*

^       : matches the beginning of the string

[^\s@]+ : matches one or more characters that are not whitespace or "@" symbol (i.e., the username)

@       : matches the "@" symbol

[^\s@]+ : matches one or more characters that are not whitespace or "@" symbol (i.e., the domain)

\.      : matches a literal "." symbol

[^\s@]+ : matches one or more characters that are not whitespace or "@" symbol (i.e., domain-extension)

$       : matches the end of the string

*/