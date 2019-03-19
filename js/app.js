'use strict';

var getPicElem = document.getElementById('puzzle');
var alphabetElem = document.getElementById('alphabet');
var slots = document.getElementById('slots');
var levelOneImg = ['car', 'star', 'dog'];
console.log('levelOneImg', levelOneImg);
var levelTwoImg = ['bubble', 'apple', 'dragon'];
console.log('leveTwoImg', levelTwoImg);
var levelThreeImg = ['butterfly', 'elephant', 'strawberry'];
console.log('levelThreeImg', levelThreeImg);


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

new levelOne('squiggle', 'jpg');
new levelOne('alph', 'png');
new levelOne('bee', 'jpg');


function levelTwo (name, ext) {
  this.name = name;
  this.ext = ext;
  this.filePath = `img/${name}.${ext}`;
  this.clicks = 0;
  levelTwoPics.push(this);
}

new levelTwo('squiggle', 'jpg');
new levelTwo('alph', 'png');
new levelTwo('bee', 'jpg');

function levelThree (name, ext) {
  this.name = name;
  this.ext = ext;
  this.filePath = `img/${name}.${ext}`;
  this.clicks = 0;
  levelThreePics.push(this);
}

new levelThree('squiggle', 'jpg');
new levelThree('alph', 'png');
new levelThree('bee', 'jpg');


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

function startFunction () {
  debugger;
  getPicElem.src = levelOnePics[0].filePath;
  var string = levelOnePics[0].name;
  var word =[];
  var indexLoca = [];
  
  for (var i = 0; i < levelOnePics[0].name.length; i++) {
    word[i] = string.charAt(i);
    word[i] = word[i].toUpperCase();  // incase user unputs lowercase field data? 
    
  }
  wordCheck.push(word);
  for ( i = 0; i < word.length; i++) {
    var newSlots = document.createElement('li');
    newSlots.className = word[i]; // assigned class name // had id name conflict
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
    // filePath.push(imgElem.src);
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

function click(event) {
  debugger;
  console.log('clicked', event.target.id);
  for(var i = 0; i < filePath.length; i++) { // 12
    if(event.target.id === wordCheck[0][i]) {
      console.log('true', event.target.id, wordCheck[0][i]);
      
      
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
      if (elem.id === newSlot[i].className);
      console.log('true', elem.id, newSlot[i].className);
      list[0].append(newElem);

      if (list[0].length > 1) {
        list[0] = list[0].pop();
      }
      // document.getElementsByClassName
      // var getClass = document.get
      // elem.remove();
      list[0].classList.className.remove();  // bug to remove or change class id

      

      break;

      // allProducts[i].click += 1;
      // console.log(`${event.target.id} has ${allProducts[i].click};
    }else{
      console.log('false');
    }
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
