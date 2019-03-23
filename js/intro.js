'use strict'

function intro() { // not used yet
  var elem = document.getElementById('modal');

  var div1 = document.createElement('div');
  div1.className = 'bg-modal';
  div1.id = 'a';
  // document.body.appendChild(div1);
  elem.appendChild(div1);
  var div2 = document.createElement('div');
  div2.className = 'modal-content';
  div2.id = 'b';
  div1.appendChild(div2);

  var imgs = document.createElement('img');
  imgs.id = 'bee-intro';
  imgs.src = 'img/cursorBee.png';
  // imgs.setAttribute('width', '20px');
  div1.appendChild(imgs);

  var p1 = document.createElement('p');
  p1.className = '';
  p1.id = 'p-intro';
  p1.innerHTML = 'Hello, What is your Name?';
  div1.appendChild(p1);

  var form = document.createElement('form');
  form.id = 'form';
  div1.appendChild(form);

  var input = document.createElement('input');
  input.type = 'text';
  input.id = 'in';
  input.placeholder = 'Name';
  form.appendChild(input);

  var x = document.createElement('div');
  x.innerHTML = '+';
  x.className = 'close';
  div1.appendChild(x);

  
  var butt = document.createElement('button');
  butt.addEventListener('click', enter); //make function
  butt.className = 'button';
  butt.id = 'button-intro';
  butt.innerHTML = 'Enter';
  div1.append(butt);


}
intro();

document.querySelector('.close').addEventListener('click', function(){
  document.querySelector('.bg-modal').style.display = 'none';
});





var names = [];

console.log('name', names);

function enter() {
  var nameValue = document.getElementById('in').value;
  console.log('click', nameValue);
  names.push(nameValue);
//push to local storage////////////////

  
  document.querySelector('.bg-modal').style.display = 'none';
  

}



