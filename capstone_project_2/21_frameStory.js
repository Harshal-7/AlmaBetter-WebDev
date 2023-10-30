// Worst Case
function worstframeStory(str) 
{
    const partsOfSpeech = str.split(' ');
    let output = '';
    let skipNextThe = false;

    let _noun = ['car','dog','cat','man','women','lion','mouse','bus','city','home'];
    let _adj = ['beautiful','elegant','brave','angry','huge','small','mysterious','kind','ambitious'];
    let _verb = ['build','climbed','dance','desire','eat','freezes','greeted','hide','like'];

    for (let i = 0; i < partsOfSpeech.length; i++)
    {
        const word = partsOfSpeech[i];

        if (word === 'noun' || word === 'noun.')
        {
            output += _noun[(Math.floor(Math.random() *_noun.length))] + ' ';
        }
        else if (word === 'verb')
        {
            output += _verb[(Math.floor(Math.random() *_verb.length))] + ' ';
        }
        else if (word === 'adjective')
        {
            output += _adj[(Math.floor(Math.random() *_adj.length))] + ' ';
        }
        else if (word === 'the' && !skipNextThe)
        {
            output += 'the ';
            skipNextThe = true;
        }
        else
        {
            output += word + ' ';
            skipNextThe = false;
        }
    }
  
    output = output.trim() + '.';
    return output;
}

// Best Case
function bestframeStory(str) 
{
    const partsOfSpeech = str.split(' ');
    let output = '';
    let skipNextThe = false;

    let _noun = ['car','dog','cat','man','women','lion','mouse','bus','city','home'];
    let _adj = ['beautiful','elegant','brave','angry','huge','small','mysterious','kind','ambitious'];
    let _verb = ['build','climbed','dance','desire','eat','freezes','greeted','hide','like'];

    // Pre-generate random selections for each part of speech
    const randomNoun = _noun[Math.floor(Math.random() * _noun.length)];
    const randomAdj = _adj[Math.floor(Math.random() * _adj.length)];
    const randomVerb = _verb[Math.floor(Math.random() * _verb.length)];
    
    for (let i = 0; i < partsOfSpeech.length; i++)
    {
        const word = partsOfSpeech[i];

        if (word === 'noun' || word === 'noun.')
        {
            output += randomNoun + ' ';
        }
        else if (word === 'verb')
        {
            output += randomVerb + ' ';
        }
        else if (word === 'adjective')
        {
            output += randomAdj + ' ';
        }
        else if (word === 'the' && !skipNextThe)
        {
            output += 'the ';
            skipNextThe = true;
        }
        else
        {
            output += word + ' ';
            skipNextThe = false;
        }
    }
  
    output = output.trim() + '.';
    return output;
}


const input1 = "The noun verb the adjective noun.";
const input2 = "An adjective noun verb over the adjective noun.";

const output1 = bestframeStory(input1);
const output2 = worstframeStory(input2);
const output3 = worstframeStory(input1);
const output4 = bestframeStory(input2);

console.log(output1);
console.log(output2); 
console.log(output3);
console.log(output4);


/*
Input: "The noun verb the adjective noun."
Output: "The dog chased the big cat."
Explanation: 
The input string contains five words: "The", "noun", "verb", "the", "adjective", and "noun".
Each of these words represents a part of speech that should be used in the story.
In this story, "The" is used as it is, "noun" is replaced with "dog",
"verb" is replaced with "chased", "the" is used as it is again,
"adjective" is replaced with "big", and the last "noun" is replaced with "cat".

Input: "An adjective noun verb over the adjective noun."
Output: "An elegant horse trotted over the green hill."
Explanation: 
This input string consists of eight words, alternating between "an", "adjective",
"noun", "verb", "over", "the", "adjective", and "noun". In the output story,
"an" is used as it is, "adjective" is replaced with "elegant",
"noun" is replaced with "horse", "verb" is replaced with "trotted",
"over" is used as it is, "the" is skipped, "adjective" is replaced with "green",
and the last "noun" is replaced with "hill".

*/