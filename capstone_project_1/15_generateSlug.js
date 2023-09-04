// URL slug generator

function generateSlug(title) 
{
    let str = title.toLowerCase().replace(/\s+/gm,'-') + '.com';
    return str;
}

console.log(generateSlug("AlmaBetter Web Dev"));

// Input: "AlmaBetter Web Dev"
// Output: "almabetter-web-dev.com"