function titleCase(sentence) 
{
    const words = sentence.toLowerCase().split(' ');
    const Map = words.map((item) => {
        item = item.charAt(0).toUpperCase() + item.substring(1);
        return item;
    })
    return Map.join(' ');
}

console.log(titleCase("Dream big, work hard, and stay focused"));

// Input: "Dream big, work hard, and stay focused"
// Output: "Dream Big, Work Hard, And Stay Focused"

/*  
    Here first we convert string to array
    so words = [ 'dream', 'big,' , 'work', 'hard,', 'and', 'stay', 'focused']
    item means each word from array
    charAt(0) takes first char of word then conver it to upper case and then 
    we use substring method to create a new word(string)
 */