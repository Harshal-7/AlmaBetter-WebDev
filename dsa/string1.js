// Remove white spaces

let str = "Ohayo! Dayjobu Desu Ka ?";
let newString = "";

for(let i = 0; i < str.length; i++)
{
    if(str[i] !== " ")
    {
        newString += str[i];
    }

    console.log(newString);

}