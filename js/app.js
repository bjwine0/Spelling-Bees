'use strict';

var getPicElem = document.getElementById('level-img');
var alphabetElem = document.getElementById('alphabet');
var slots = document.getElementById('slots');



var allAlphabets = [];
console.log('allAlphabets', allAlphabets);

var levelOnePics = [];
console.log('levelone', levelOnePics);

var levelTwoPics = [];
console.log('leveltwo', levelTwoPics);

var levelThreePics = [];
console.log('level3', levelThreePics);



function ImageAlph(name, ext) {
  this.name = name;
  this.ext = ext;
  this.filePath = `img/${name}.${ext}`;
  this.clicks = 0;
  allAlphabets.push(this);
}

new ImageAlph('A', 'png');
new ImageAlph('B', 'png');
new ImageAlph('C', 'png');
new ImageAlph('D', 'png');
new ImageAlph('E', 'png');
new ImageAlph('F', 'png');
new ImageAlph('G', 'png');
new ImageAlph('H', 'png');
new ImageAlph('I', 'png');
new ImageAlph('J', 'png');
new ImageAlph('K', 'png');
new ImageAlph('L', 'png');
new ImageAlph('M', 'png');
new ImageAlph('N', 'png');
new ImageAlph('O', 'png');
new ImageAlph('P', 'png');
new ImageAlph('Q', 'png');
new ImageAlph('R', 'png');
new ImageAlph('S', 'png');
new ImageAlph('T', 'png');
new ImageAlph('U', 'png');
new ImageAlph('V', 'png');
new ImageAlph('W', 'png');
new ImageAlph('X', 'png');
new ImageAlph('Y', 'png');
new ImageAlph('Z', 'png');


function levelOne (name, ext) {
  this.name = name;
  this.ext = ext;
  this.filePath = `img/${name}.${ext}`;
  this.clicks = 0;
  levelOnePics.push(this);
}

new levelOne('Car', 'png');
new levelOne('Star', 'png');
new levelOne('Dog', 'png');


function levelTwo (name, ext) {
  this.name = name;
  this.ext = ext;
  this.filePath = `img/${name}.${ext}`;
  this.clicks = 0;
  levelTwoPics.push(this);
}

new levelTwo('Apple', 'png');
new levelTwo('Dragon', 'png');
new levelTwo('Bubble', 'png');

function levelThree (name, ext) {
  this.name = name;
  this.ext = ext;
  this.filePath = `img/${name}.${ext}`;
  this.clicks = 0;
  levelThreePics.push(this);
}

new levelThree('Elephant', 'png');
new levelThree('Strawberry', 'png');
new levelThree('Butterfly', 'png');


function removeButton() {
  var elem = document.getElementById('replay');
  elem.parentNode.removeChild(elem);
}
removeButton();

function recallButton() {
  var element = document.getElementById('buttons');
  var elem = document.createElement('button');
  element.appendChild(elem);
}
//***********Recall button work */


function startButtonBye () {
  var elem = document.getElementById('start');
  elem.parentNode.removeChild(elem);

}

document.getElementById('start').addEventListener('click', startFunction);

// function levelRotate () {
//   debugger
//   for (var i = 0; i <= levelOnePics.length; i++) {
//     var newElem = document.createElement('img');
//     newElem.src = levelOnePics[i].filePath;
//     newElem.id = levelOnePics[i].name;
//     getPicElem.appendChild(newElem);
//     startFunction();
//   }
// }

function startFunction () {
  debugger;
  for (var i = 0; i <= levelOnePics.length; i++) {
    var newElem = document.createElement('img');
    newElem.src = levelOnePics[i].filePath;
    newElem.id = levelOnePics[i].name;
    getPicElem.appendChild(newElem);
    
    var string = levelOnePics[i].name;
    var word =[];
    var indexLoca = [];
  
    for (var i = 0; i < string.length; i++) {
      word[i] = string.charAt(i);
      word[i] = word[i].toUpperCase();  
    
    }
    wordCheck.push(word);
    for ( i = 0; i < word.length; i++) {
      var newSlots = document.createElement('li');
      newSlots.className = word[i]; 
      newSlot.push(newSlots);
      console.log('slots', newSlots);
      slots.appendChild(newSlots);

    }

    console.log('word', word);
    for (var j = 0; j < word.length; j++) {
      for( var k = 0; k < allAlphabets.length; k++) {
        if (word[j] === allAlphabets[k].name) {
          console.log('true');
          indexLoca[j] = (k);
          console.log('indexLocation', indexLoca);
          break;
        }
      }
    }
  }
  var currentTen = [];
  
  for (var i = 0; i < 12 - indexLoca.length; i++) {
    currentTen[i] = getRandom();
  }

  var wordPlusRandom = indexLoca.concat(currentTen);
  imgString.push(wordPlusRandom);
  console.log('curentten', currentTen);
  console.log('wordPlusRandom', wordPlusRandom);

  var shuffled = shuffle(wordPlusRandom);
  console.log('shuffled', shuffled);
  // debugger;
  for (var i = 0; i < shuffled.length; i++) {

    var imgElem = document.createElement('img');
  
    imgElem.src = allAlphabets[shuffled[i]].filePath;
    imgElem.id = allAlphabets[shuffled[i]].name; 
    filePath[i] = shuffled[i];
    imgElem.addEventListener('click', click);
    alphabetElem.appendChild(imgElem);

  }

  console.log('filepath', filePath);
  console.log('imgString', imgString);
  
  startButtonBye();
}
var imgString = [];
var filePath = [];  //  use for local storage
var newSlot = [];
var wordCheck =[];
var trueCount = 0;
function click(event) {
  debugger;
  
  console.log('clicked', event.target.id);
  for(var i = 0; i < filePath.length; i++) { // 12
    if(event.target.id === wordCheck[0][i]) {
      console.log('true', event.target.id, wordCheck[0][i]);
      
      trueCount += 1;
      var elem = document.getElementById(event.target.id);
      console.log('elem', elem);
      elem.remove();
      delete wordCheck[0][i];
      console.log('wordcheck', wordCheck);
      var list = document.getElementsByClassName(event.target.id);
      console.log('list', list);
      var newElem = document.createElement('img');
      newElem = elem;
      console.log('newElem', newElem);

      if (elem.id === newSlot[i].className){
        console.log('true', elem.id, newSlot[i].className);
        list[0].append(newElem);
        newElem.id = 'done';
        list[0].className = 'done';
      }
    }
    console.log('count', trueCount);
  }

  if (trueCount === 3){
    console.log('true', trueCount); 
    goodJob();
  } else {
    console.log('false', trueCount);
  }
  
}



function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function getRandom() {
  return Math.floor(Math.random() * allAlphabets.length);
}

function goodJob() {  // not used yet
  var elem = document.getElementById('modal');
  
  var div1 = document.createElement('div');
  div1.className = 'bg-modal';
  // document.body.appendChild(div1);
  elem.appendChild(div1);
  var div2 = document.createElement('div');
  div2.className = 'modal-content';
  div1.appendChild(div2);

  var p1 = document.createElement('p');
  p1.className = 'p1';
  p1.innerHTML = 'Good Job ! <br>You Earned 2 Tickets <br>Use Your Tickets To Reveal A Bonus Puzzle';
  div1.appendChild(p1);
  var butt = document.createElement('button');
  butt.className = 'button';
  butt.innerHTML = 'Click Me to See Puzzle';
  div1.append(butt);
}
