var input = "racecar";

function isPalindrome() {
    let i = 0;
    let j = input.length - 1;

    for(i = 0, j = input.length - 1; i < j; i++,j--)
    {
        if(input[i] != input[j])
        {
            return false;
        }

    }

    return true;
}

let result = isPalindrome();
console.log(result);