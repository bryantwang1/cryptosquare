var testString = "This is a pikachu but not a very good pikachu."

var newString = testString.replace(/\W*/g, "");
var stringLength = newString.length;
var letterArrays = newString.split("");
var squareRoot = parseInt(Math.sqrt(stringLength));
var columnSize = squareRoot;
var rowSize = squareRoot;
var arrayOfArrays = [];
var cryptArrays = [];
var cryptString = "";

// sets appropriate number of rows
if(stringLength % squareRoot !== 0) {
	rowSize++;
}
if(stringLength % Math.pow(squareRoot, 2) > columnSize) {
	rowSize++;
}
// creates arrays for each row within a larger array
for (var idx = 0; idx < rowSize; idx++) {
	arrayOfArrays[idx] = [];
}
for (var index = 0; index < rowSize; index++) {
	for(var index2 = 0; index2 < columnSize; index2++) {
  arrayOfArrays[index][index2] = letterArrays[0];
  letterArrays.shift();
  }
}

for (var index = 0; index < columnSize; index++) {
	for(var index2 = 0; index2 < rowSize; index2++) {
  cryptArrays.push(arrayOfArrays[index2][index]);
  }
}
cryptArrays = cryptArrays.join("").replace(/undefined/g, "").split("");
for(var idx = 5; idx < cryptArrays.length; idx += 6) {
	cryptArrays.splice(idx, 0, " ");
}
cryptString = cryptArrays.join("");

console.log(arrayOfArrays);
console.log(cryptArrays);
console.log(cryptString);
