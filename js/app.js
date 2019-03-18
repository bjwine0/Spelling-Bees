'use strict';

var getPicElem = document.getElementById('puzzle');
var alphabetElem = document.getElementById('alphabet');
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

new ImageAlph('A', 'jpg');
new ImageAlph('B', 'jpg');
new ImageAlph('C', 'jpg');
new ImageAlph('D', 'jpg');
new ImageAlph('E', 'jpg');
new ImageAlph('F', 'jpg');
new ImageAlph('G', 'jpg');
new ImageAlph('H', 'jpg');
new ImageAlph('I', 'jpg');
new ImageAlph('J', 'jpg');
new ImageAlph('K', 'jpg');
new ImageAlph('L', 'jpg');
new ImageAlph('M', 'jpg');
new ImageAlph('N', 'jpg');
new ImageAlph('O', 'jpg');
new ImageAlph('P', 'jpg');
new ImageAlph('Q', 'jpg');
new ImageAlph('R', 'jpg');
new ImageAlph('S', 'jpg');
new ImageAlph('T', 'jpg');
new ImageAlph('U', 'jpg');
new ImageAlph('V', 'jpg');
new ImageAlph('W', 'jpg');
new ImageAlph('X', 'jpg');
new ImageAlph('Y', 'jpg');
new ImageAlph('Z', 'jpg');



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
  for (var j = 0; j < word.length; j++) {
    for( var k = 0; k < allAlphabets.length; k++) {
      if (word[j] === allAlphabets[k].name) {
        console.log('true');
        indexLoca[j] = (k);
        console.log('indexLocation', indexLoca);
      }
    }
  }
  var currentTen = [];

  for (var i = 0; i < 12 - indexLoca.length; i++) {
    currentTen[i] = getRandom();
  }

  var wordPlusRandom = indexLoca.concat(currentTen);
  imgString.push(wordPlusRandom);
  console.log('curenttem', currentTen);
  console.log('wordPlusRandom', wordPlusRandom);

  var shuffled = shuffle(wordPlusRandom);
  console.log('shuffled', shuffled);

  for (var i = 0; i < shuffled.length; i++) {

  
    var imgElem = document.createElement('img');
    imgElem.src = allAlphabets[shuffled[i]].filePath;
    
    alphabetElem.appendChild(imgElem);
    
  }

  
  startButtonBye();
  

  
}

var imgString = [];  //  use for local storage
console.log('imgstring', imgString);













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
