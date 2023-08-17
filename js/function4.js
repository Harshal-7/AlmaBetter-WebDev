function greet(name)
{
    return `Hello ${name}`;
}

function shoutOut(textFunc,name)
{
    const text = textFunc(name);
    return text.toUpperCase();
}

const a = shoutOut(greet,"Eriguchi");
console.log(a);