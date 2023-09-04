// One Dinemtional Array:
let fruits = ['mango','apple','strawberry','banana','guava'];  

//Multi-Dimentional Array:
let food = [['chocolate', 'biscuit', 'cookies'],
            ['pineapple', 'banana', 'strawberry'],                
            ['chicken-tikka', 'paneer', 'aloo']]

for(let types of food)
{
    for(let items of types)
    {
        console.log(items);
    }
}