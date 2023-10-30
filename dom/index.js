let ele = document.getElementById('myId');
ele.innerHTML = "OHAYO GOZAIMASU";

let element = document.getElementsByTagName('p');
for(let i = 0; i < element.length; i++)
{
    console.log(element[i].textContent);
}

let element1 = document.getElementsByClassName('p2');
for(let i = 0; i < element1.length; i++)
{
    // element1[i].innerHTML = "Hehe " + (i+1);
    element1[i].textContent = "updated content";
    console.log(element1[i].textContent);
}

let ele2 = document.querySelectorAll('p');
for(let i = 0; i < ele2.length; i++)
{
    ele2[i].classList.add("meow");      // Dynamically add classes on specific tags in HTML
}

let ele3 = document.querySelectorAll('p')
for(let i = 0; i < ele3.length; i++)
{
    if(ele3[i].getAttribute("class") == 'p2 meow')
    {
        ele3[i].style.backgroundColor="blue";
        ele3[i].style.color="white";
    }
    else{
        ele3[i].style.backgroundColor="powderblue";
    }
}

var ele4 = document.createElement('div');
ele4.textContent = "This is dynamic text";
ele4.style.fontSize = '38px';
ele4.style.textAlign = 'center';
ele4.style.color="white";
ele4.style.backgroundColor="black";
document.getElementById('myId2').appendChild(ele4)

var parent = document.getElementById('parent');
var child = document.getElementById('child');
parent.style.fontSize = '38px';
parent.style.textAlign = 'center';
parent.style.marginTop = '38px'
child.style.fontSize = '30px';
child.style.textAlign = 'center';
child.style.marginTop = '25px'
parent.removeChild(child);          // Removing Child Div Dynamically