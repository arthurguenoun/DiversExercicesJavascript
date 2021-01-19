'use strict';
document.getElementById('id-nombre').addEventListener('keyup', function(){
var monText = document.getElementById('id-nombre');
console.log(monText.value);
if(parseFloat(monText.value) != Number(monText.value)){
	document.getElementById('copie').innerHTML ="veuillez rentrer un nombre svp"
	document.getElementById('copie-carre').innerHTML ="veuillez rentrer un nombre svp"
	document.getElementById('copie-cube').innerHTML ="veuillez rentrer un nombre svp";
} else {
	document.getElementById('copie').innerHTML = monText.value;
	document.getElementById('copie-carre').innerHTML = monText.value*monText.value;
	document.getElementById('copie-cube').innerHTML = monText.value*monText.value*monText.value;
}
})
