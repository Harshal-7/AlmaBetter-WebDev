function calculateTip(billAmount, tipPercentage)
{
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return Number(totalAmount.toFixed(2));          // number() -> Number()/
}

console.log(calculateTip(90.00, 0.10));
