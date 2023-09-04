function calculateTotal(cart) 
{
    const total = cart.reduce((accumulator,currentValue) => {
        return accumulator + (currentValue.price * currentValue.quantity);
    },0)

    return total;
}


const cart2 = [
    { name: "Fruits", price: 10, quantity: 5 },
    { name: "Vegetables", price: 8, quantity: 3 },
    { name: "Dairy", price: 5, quantity: 2 },
    { name: "Snacks", price: 3, quantity: 10 },
  ];
  
console.log(calculateTotal(cart2));

/*
Input: cart2
Output: 114
Explanation: price * quantity of all products = (5 * 10 + 3 * 8 + 2 * 5 + 10 * 3) = 114
*/