'use strict';

var position3 = 0;
document.getElementById('bouton').addEventListener("click", function(){
	switch(position3){
	case 0:
	document.getElementById('carre').style.left=260+'px';
	position3 =  1;
	console.log(position3);
	break;
	case 1:
	document.getElementById('carre').style.top=50+'px';
	position3=2;
	break
	case 2:
	document.getElementById('carre').style.left=10+'px';
	position3 = 3;
	break 
	case 3:
	document.getElementById('carre').style.top=300+'px';
	position3=0;
	break
}
});


console.log(position3);
var position=0;
document.getElementById('conteneur2').addEventListener('wheel',function(){

	switch(position) {
		case 0:
		document.getElementById('carre2').style.left=+25+'px';
		position= 1;
		break;
		case 1:
		document.getElementById('carre2').style.left= 50+'px';
		position= 2;
		break;
		case 2:
		document.getElementById('carre2').style.left= 75 +'px';
		position= 3;
		break;
		case 3:
		document.getElementById('carre2').style.left= 100+'px';
		position= 4;
		break;
		case 4:
		document.getElementById('carre2').style.left= 125 +'px';
		position= 5;
		break;
		case 5:
		document.getElementById('carre2').style.left= 150+'px';
		position= 6;
		break;
		case 6:
		document.getElementById('carre2').style.left= 125 +'px';
		position= 7;
		break;
		case 7:
		document.getElementById('carre2').style.left= 100+'px';
		position= 8;
		break;
		case 8:
		document.getElementById('carre2').style.left= 75+'px';
		position= 9;
		break;
		case 9:
		document.getElementById('carre2').style.left= 50+'px';
		position= 10;
		break;
		case 10:
		document.getElementById('carre2').style.left= 25+'px';
		position= 0;
		
		
	}
	
})
