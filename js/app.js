
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

var giffy = [];
console.log('giff', giffy);

var levels = {
  one: [],
  two: [],
  three: [],
};

console.log('levels', levels);
var viewedImages = 0;


function ImageAlph(name, ext) {
  this.name = name;
  this.ext = ext;
  this.filePath = `img/${name}.${ext}`;
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


function LevelOne (name, ext) {
  this.name = name;
  this.ext = ext;
  this.filePath = `img/${name}.${ext}`;
  levels.one.push(this);
}

new LevelOne('Car', 'png');
new LevelOne('Star', 'png');
new LevelOne('Dog', 'png');


function LevelTwo (name, ext) {
  this.name = name;
  this.ext = ext;
  this.filePath = `img/${name}.${ext}`;
  levels.two.push(this);
}

new LevelTwo('Apple', 'png');
new LevelTwo('Dragon', 'png');
new LevelTwo('Bubble', 'png');

function LevelThree (name, ext) {
  this.name = name;
  this.ext = ext;
  this.filePath = `img/${name}.${ext}`;
  levels.three.push(this);
}

new LevelThree('Elephant', 'png');
new LevelThree('Strawberry', 'png');
new LevelThree('Butterfly', 'png');

function Giff (name, ext) {
  this.name = name;
  this.ext = ext;
  this.filePath = `img/${name}.${ext}`;
  giffy.push(this);
}

new Giff('giphy', 'gif');
new Giff('kid', 'gif');
new Giff('kid', 'gif');

function startButtonBye () {
  var elem = document.getElementById('start');
  if (elem === null) {
    console.log('true');
  }else{
    elem.parentNode.removeChild(elem);
  }
  
}

document.getElementById('start').addEventListener('click', startFunction);



function randWord() {
  return Math.floor(Math.random() * levels.one.length);
}

var viewedImage = [];
var strings = '';
function startFunction () {
  function pickLetters(){
    var para = document.createElement("P");                     
    var t = document.createTextNode("Pick Your Letters!");      
    para.appendChild(t);                                          
    document.getElementById("Pick").appendChild(para);}
    
    pickLetters();
  
    function makeBanner(){
      var img = document.createElement("img");
      img.src = "img/letterScroll-1.png";
      var src = document.getElementById("letterScroll");
      src.appendChild(img);}
      
      makeBanner();

      
  debugger;
  var z = document.getElementsByClassName('z');
  var zz = document.getElementsByClassName('done');
  console.log(z);
  if (z.length === 0) {
    console.log('true');
    
  }else {
    for (var i = z.length - 1; i >= 0; --i) {
      z[i].remove();
      
    } 
  }
  if (zz.length === 0) {
    console.log('true');
    
  }else {
    for ( i = zz.length - 1; i >= 0; --i) {
      zz[i].remove();
      
    }
    
  }
  
  var currentImage = [];
  debugger;
  currentImage[0] = randWord();
  while (viewedImage.indexOf(currentImage[0]) !== -1) {
    currentImage[0] = randWord();
    
    // viewedImage = currentImage.clone();
    
  }
  viewedImage = currentImage;
  viewedImages ++;
  
  console.log('currentimage', currentImage);
  console.log('viewedimage', viewedImage);
  var newElem = document.createElement('img');
  newElem.src = levels.one[currentImage].filePath;
  newElem.id = levels.one[currentImage].name;
  newElem.className = 'z';
  getPicElem.appendChild(newElem);
  
  
  var string = levels.one[currentImage].name;
  
  strings = string;
  var word =[];
  var indexLoca = [];
  
  for ( i = 0; i < string.length; i++) {
    word[i] = string.charAt(i);
    word[i] = word[i].toUpperCase();
    
  }
  wordCheck.push(word);
  for ( i = 0; i < word.length; i++) {
    var newSlots = document.createElement('li');
    newSlots.className = word[i];
    // newSlots.className += 'z';
    newSlots.id = 'z';
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
  
  for ( i = 0; i < 12 - indexLoca.length; i++) {
    currentTen[i] = getRandom();
  }
  
  var wordPlusRandom = indexLoca.concat(currentTen);
  imgString.push(wordPlusRandom);
  console.log('curentten', currentTen);
  console.log('wordPlusRandom', wordPlusRandom);
  
  var shuffled = shuffle(wordPlusRandom);
  console.log('shuffled', shuffled);
  // debugger;
  for ( i = 0; i < shuffled.length; i++) {
    
    var imgElem = document.createElement('img');
    
    imgElem.src = allAlphabets[shuffled[i]].filePath;
    imgElem.id = allAlphabets[shuffled[i]].name;
    imgElem.className = 'z';
    filePath[i] = shuffled[i];
    imgElem.addEventListener('click', click);
    alphabetElem.appendChild(imgElem);
    
  }

  console.log('filepath', filePath);
  console.log('imgString', imgString);



  if (typeof(element) !== 'undefined' && element !== null) {
    console.log('true');

  }else{
    startButtonBye();
  }

}

var imgString = [];
var filePath = []; //  use for local storage
var newSlot = [];
var wordCheck =[];
var trueCount = 0;

var click = function(event) {
  
  debugger;
  // console.log('clicked', event.target.id);
  for(var i = 0; i < wordCheck.length; i++) { 
    for(var j = 0; j < wordCheck[i].length; j++) {
      if(event.target.id === wordCheck[i][j]) {
        console.log('true', event.target.id, wordCheck[i][j]);

        trueCount += 1;
        var elem = document.getElementById(event.target.id);
        console.log('elem', elem);
        elem.remove();
        delete wordCheck[i][j];
      // wordCheck[0].splice(i, 1);
        console.log('wordcheck', wordCheck);
        var list = document.getElementsByClassName(event.target.id);
        console.log('list', list);
        var newElem = document.createElement('img');
        newElem = elem;
        console.log('newElem', newElem);
        
        for (var k = 0; k < newSlot.length; k++) {
          if (elem.id === newSlot[k].className){
            console.log('true', elem.id, newSlot[k].className);
            list[0].append(newElem);
            newElem.id = 'done';
            list[0].className = 'done';
          }
        }
        debugger;
      }else {
        console.log('false', event.target.id, wordCheck[i][j]);
      }
    }
    console.log('count', trueCount);
  }

  // for (var i = 0; i < newSlot.length; i++) {
  if (trueCount === wordCheck[0].length){
    console.log('true', trueCount);

    goodJob();
  }
  // }

};


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

var goodJob = function() { // not used yet
  debugger;
  
  wordCheck = [];
  trueCount = 0;
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

  var p1 = document.createElement('p');
  p1.className = 'p1';
  p1.id = 'p';
  p1.innerHTML = `Good Job ! <br>You Spelled <br> ${strings}`;
  div1.appendChild(p1);

  var butt = document.createElement('button');
  butt.addEventListener('click', gif);
  butt.className = 'button';
  butt.id = 'but';
  butt.innerHTML = 'Bonus Puzzle';
  div1.append(butt);

  // startFunction();
};

var goodJobLevelOne = function() { // not used yet
  debugger;

  
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

  var p1 = document.createElement('p');
  p1.className = 'p1';
  p1.id = 'p';
  p1.innerHTML = 'Congratulations !! <br>You Passed Level One';
  div1.appendChild(p1);

  var butt = document.createElement('button');
  butt.addEventListener('click', gif);
  butt.className = 'button';
  butt.id = 'but';
  butt.innerHTML = 'Celebrate';
  div1.append(butt);

  // startFunction();
};

var puzzle = {
  square: [],
  square2: [],
  square3: [],
  square4: [],
  square5: [],
  square6: [],
};

function randomGiff() {
  return Math.floor(Math.random() * giffy.length);
}


function gif() {
  debugger;
  if (viewedImages === 3 ){
    goodJobLevelOne();
  }
  rem();
  var place = document.getElementById('b');
  var gif = document.createElement('img');
  gif.className = 'hidden-img';
  var gi = randomGiff();
  console.log('gif', gi);
  gif.src = giffy[gi].filePath;
  place.appendChild(gif);

  var square = document.createElement('div');
  square.id = 'square';
  square.addEventListener('click', removeDiv);
  var span = document.createElement('span');
  span.id = 'u';
  square.appendChild(span);
  span = document.createElement('span');
  span.id = 'v';
  square.appendChild(span);
  span = document.createElement('span');
  span.id = 'w';
  square.appendChild(span);
  span = document.createElement('span');
  span.id = 'x';
  square.appendChild(span);

  place.appendChild(square);
  squareArray.push(square.id);
  console.log('square', squareArray);


  var square2 = document.createElement('div');
  square2.id = 'square2';
  square2.addEventListener('click', removeDiv);
  span = document.createElement('span');
  span.id = 'uu';
  square2.appendChild(span);
  span = document.createElement('span');
  span.id = 'vv';
  square2.appendChild(span);
  span = document.createElement('span');
  span.id = 'ww';
  square2.appendChild(span);
  span = document.createElement('span');
  span.id = 'xx';
  square2.appendChild(span);

  place.appendChild(square2);
  squareArray.push(square2.id);
  console.log('square2', squareArray);

  var square3 = document.createElement('div');
  square3.id = 'square3';
  square3.addEventListener('click', removeDiv);
  span = document.createElement('span');
  span.id = 'uu';
  square3.appendChild(span);
  span = document.createElement('span');
  span.id = 'vv';
  square3.appendChild(span);
  span = document.createElement('span');
  span.id = 'ww';
  square3.appendChild(span);
  span = document.createElement('span');
  span.id = 'xx';
  square3.appendChild(span);

  console.log('square3', event.target.id);
  place.appendChild(square3);
  squareArray.push(square3.id);
  console.log('square3', squareArray);


  var square4 = document.createElement('div');
  square4.id = 'square4';
  square4.addEventListener('click', removeDiv);
  span = document.createElement('span');
  span.id = 'uu';
  square4.appendChild(span);
  span = document.createElement('span');
  span.id = 'vv';
  square4.appendChild(span);
  span = document.createElement('span');
  span.id = 'ww';
  square4.appendChild(span);
  span = document.createElement('span');
  span.id = 'xx';
  square4.appendChild(span);

  console.log('square4', event.target.id);
  place.appendChild(square4);
  squareArray.push(square4.id);
  console.log('square4', squareArray);


  var square5 = document.createElement('div');
  square5.id = 'square5';
  square5.addEventListener('click', removeDiv);
  span = document.createElement('span');
  span.id = 'uu';
  square5.appendChild(span);
  span = document.createElement('span');
  span.id = 'vv';
  square5.appendChild(span);
  span = document.createElement('span');
  span.id = 'ww';
  square5.appendChild(span);
  span = document.createElement('span');
  span.id = 'xx';
  square5.appendChild(span);

  console.log('square5', event.target.id);
  place.appendChild(square5);
  squareArray.push(square5.id);
  console.log('square5', squareArray);


  var square6 = document.createElement('div');
  square6.id = 'square6';
  square6.addEventListener('click', removeDiv);
  span = document.createElement('span');
  span.id = 'uu';
  square6.appendChild(span);
  span = document.createElement('span');
  span.id = 'vv';
  square6.appendChild(span);
  span = document.createElement('span');
  span.id = 'ww';
  square6.appendChild(span);
  span = document.createElement('span');
  span.id = 'xx';
  square6.appendChild(span);

  console.log('square6', event.target.id);
  place.appendChild(square6);
  squareArray.push(square6.id);
  console.log('square6', squareArray);

  var butt = document.createElement('button');
  butt.addEventListener('click', nextWord); // create function to go to next word

  butt.className = 'bu';
  butt.id = 'butter';
  butt.innerHTML = 'Next Word';
  place.append(butt);

}



//removes divs on click
function removeDiv () {
  debugger;
  var fadeTarget = document.getElementById(event.target.id);

  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 100);
}


//function to remove paragraph and button
function rem () {
  var a = document.getElementById('p');
  var b = document.getElementById('but');
  // var c = document.getElementById('letterScroll');
  // var d = document.getElementById('Pick');
  a.remove();
  b.remove();
  // c.remove();
  // d.remove();
}

var squareArray = [];

function nextWord () {
  var removePuzzle = document.getElementById('a');
  var removeSlots = document.getElementById('slots');
  var removeImg = document.getElementById('level-img');
  var removeAlpha = document.getElementById('alphabet');
  var removeScroll = document.getElementById('letterScroll');
  var removePick = document.getElementById('Pick');
  // var removePuzzle = document.getElementById('a');
  // var elemPic = document.getElementsByClassName('z');
  removePuzzle.remove();
  removeSlots.remove();
  removeImg.remove();
  removeAlpha.remove();
  removeScroll.remove();
  removePick.remove();
  remove.startFunction.remove();
  // remove();
  // elemPic.remove();
  // var z = document.getElementsByClassName('z');
  // console.log('z', z);
  // z.remove();
  
} 

// nextWord();
// startFunction();

