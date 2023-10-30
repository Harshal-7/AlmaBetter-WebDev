var parent = document.getElementById('parent');
parent.addEventListener('click',()=>{
    alert('Parent Executed');
});

var child = document.getElementById('child');
child.addEventListener('click',function(e){
    e.stopPropagation();
    alert('Child Executed');
});

var gChild = document.getElementById('grandChild');
gChild.addEventListener('click',function(e){
    e.stopPropagation();
    alert('Grand Child Executed');
});


// HTML

// JavaScript
const parentElement = document.getElementById('parentElement');

parentElement.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    // Event occurred on a <li> element
    console.log('Clicked on:', event.target.textContent);
  }
});

var input_tx = document.getElementById('input-tx');
input_tx.addEventListener('keypress',()=>{
  input_tx.style.backgroundColor = 'powderblue';
});

