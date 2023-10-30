var heading1 = document.getElementById('main-container').querySelector('h1');
heading1.textContent = 'DOM Manipulation Assignment.';

var paraText = document.querySelector('.intro');
paraText.textContent += ' In this assignment, you will practice DOM manipulation techniques.';

var boxEle = document.querySelector('.box');
boxEle.innerHTML = `
    <h2>Box Content</h2>
    <p>This box is being dynamically generated and styled using JavaScript.</p>
`
boxEle.style.backgroundColor = "#f2f2f2";
boxEle.style.border = "1px solid #333";
boxEle.style.padding = "10px";

var btn = document.querySelector('#btn');
var btnRemove = document.querySelector('#btn-remove');

var intro = document.querySelector('.intro');

btn.addEventListener("click",()=>{
    intro.classList.add("highlight");
});

btnRemove.addEventListener("click",()=>{
    intro.classList.remove("highlight");
})