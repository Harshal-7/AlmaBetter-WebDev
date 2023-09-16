function lowerCaseFirstWord(str)
{
    let words = str.split(' ');

    let lowerCase = words.map(item => {
        item = item.charAt(0).toLowerCase() + item.substring(1);
        return item;
    })

    return lowerCase.join(' ');

}

var str = "OREWA KONO YOU NI UMARE TAKARA DA!";
console.log(lowerCaseFirstWord(str));

// Output:
//  oREWA kONO yOU nI uMARE tAKARA dA!
