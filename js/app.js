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
var allImagePic = [];
console.log('allImagePic', allImagePic);

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



function ImagePic (name, ext) {
  this.name = name;
  this.ext = ext;
  this.filePath = `img/${name}.${ext}`;
  this.clicks = 0;
  allImagePic.push(this);
}

new ImagePic('squiggle', 'jpg');
new ImagePic('alph', 'png');
new ImagePic('bee', 'jpg');
new ImagePic('', '');
new ImagePic('', '');
new ImagePic('', '');
new ImagePic('', '');
new ImagePic('', '');
new ImagePic('', '');







