var minAddToMakeValid = function(s) {
    let stack = [];
    let additions = 0;
    
    for (let c of s) {
        if (c === '(') {
            stack.push(c);
        } else if (c === ')' && stack.length > 0) {
            stack.pop();
        } else {
            additions++;
        }
    }
    
    return additions + stack.length;
};


console.log(minAddToMakeValid('(()'));
console.log(minAddToMakeValid("())"));
console.log(minAddToMakeValid('()))(('));
