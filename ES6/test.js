function string_copies(str,n) 
{
    if(n <= 0)
    {
        return "";
    }
    
    return str + string_copies(str,n-1)
}

console.log(string_copies("hello",3));