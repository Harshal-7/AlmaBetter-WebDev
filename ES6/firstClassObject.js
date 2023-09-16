function hi()
{
    return "Hi";
}

function greet(msg)
{
    console.log(msg() + " How Are You!!");
}

greet(hi);