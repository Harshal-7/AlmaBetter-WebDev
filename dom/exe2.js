//Task 1:
var changeColor = document.getElementById('changeColorBtn');
var colorDiv = document.getElementById('colorDiv');
var appendPara = document.getElementById('appendParagraphBtn');

function getRandomColor()
{
    let letters = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++)
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

changeColor.addEventListener('click',()=>{
    colorDiv.style.backgroundColor = getRandomColor();
})

appendPara.addEventListener('click',()=>{
    colorDiv.textContent = 'This is a sample text for new paragraph';
});

//Task 2:
var clickBtn = document.getElementById('clickBtn');
var clickCount = document.getElementById('clickCount');
let count = 0;

clickBtn.addEventListener('click',()=>{
    count++;
    clickCount.textContent = `Button clicked ${count} times`;
});


//Task 3:
var parentDiv = document.getElementById('parentDiv');

function handleClick(e)
{
    alert(`${e.target.textContent} clicked.`);
}

var buttons = parentDiv.querySelectorAll('button');
// buttons.forEach(button=>button.addEventListener('click',handleClick));

parentDiv.addEventListener('click', function(event){
    if (event.target.tagName === 'BUTTON')
    {
        alert(`${event.target.textContent} clicked (Event Delegation).`);
    }
});