"use strict";


function palindrome(str) {
// Good luck!
var strLc = str.toLowerCase();
var arrForward = [];
var arrBackwards = [];
var strF = '';
var strB = '';

for(var i=0; i < strLc.length; i++){

   arrForward.push(str[i]);

}
document.getElementById('arrForward').innnerHTML = "esto es arrForward: " + arrForward;
document.getElementById('arrBackwards').innnerHTML = arrBackwards;

for(var j=strLc.length -1; j>-1; j--){
  arrBackwards.push(str[j]);
}
for(var k=0; k<arrForward.length; k++){
  strF += arrForward[k];
}
for(var l=0; l<arrBackwards.length; l++){
  strB += arrBackwards[l];
}
document.getElementById('strF').innerHTML = "esto es strF: " + strF;
document.getElementById('strB').innerHTML = "esto es strB: " + strB;
if(strF === strB){
  document.getElementById('resultado').innerHTML= "true";
}else{
  document.getElementById('resultado').innerHTML= "false";
}

}
