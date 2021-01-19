'use strict';
document.getElementById('id-text').addEventListener('keyup', function(){
var monText = document.getElementById('id-text');
console.log(monText.value);
document.getElementById('copie').innerHTML =monText.value;


})