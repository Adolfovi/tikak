var blockchoosed;
var puntuation = 0;
var blockone = false;
var blocktwo = false;
var blockthree = false;
var blockfour = false;
var blockfive = false;
var blocksix = false;
var blockseven = false;
var blockeight = false;
var blocknine = false;
var time = 30;

// LLAMAR A activetimer() PARA INICIAR LA CUENTA ATRÁS
function decrtime(){
	time = time - 1;
	document.getElementById("seconds").innerHTML = time;
if(time === 0){
alert('HAS HECHO ' + puntuation + " PUNTOS!!");
location.reload();
}

}

function activetimer(){
setInterval(decrtime,1000);
}

// FUNCION PARA INICIAR EL JUEGO DESPUES DE HABERLE DADO AL BOTON START
function goodbye(){
document.getElementById('seconds').innerHTML = time;
document.getElementById("presentation").style.display = "none";
document.getElementById("bigcontainer").style.display = "flex";
document.getElementById("Score").innerHTML = puntuation;
activetimer();
blockchoosed = Math.floor(Math.random()*9);
console.log(blockchoosed);

if(blockchoosed == 0){
document.getElementById("block-one").style.backgroundColor = "#cedd51";
blockone = true;

}else if(blockchoosed == 1){
document.getElementById("block-two").style.backgroundColor = "#cedd51";
blocktwo = true;

}else if(blockchoosed == 2){
document.getElementById("block-three").style.backgroundColor = "#cedd51";
blockthree = true;

}else if(blockchoosed == 3){
document.getElementById("block-four").style.backgroundColor = "#cedd51";
blockfour = true;

}else if(blockchoosed == 4){
document.getElementById("block-five").style.backgroundColor = "#cedd51";
blockfive = true;

}else if(blockchoosed == 5){
document.getElementById("block-six").style.backgroundColor = "#cedd51";
blocksix = true;

}else if(blockchoosed == 6){
document.getElementById("block-seven").style.backgroundColor = "#cedd51";
blockseven = true;

}else if(blockchoosed == 7){
document.getElementById("block-eight").style.backgroundColor = "#cedd51";
blockeight = true;

}else if(blockchoosed == 8){
document.getElementById("block-nine").style.backgroundColor = "#cedd51";
blocknine = true;

}else{

	location.reload();
}


}



// FUNCION PARA COMPROBAR SI EL BLOQUE ELEGIDO POR LA IA ES EL UNO
function isone(){
if(blockone == true){
		puntuation = puntuation + 2;
		document.getElementById("Score").innerHTML = puntuation;
		returnplaying();


}else{
		puntuation = puntuation - 1;
		document.getElementById("Score").innerHTML = puntuation;
		returnplaying();
}

}

// FUNCION PARA COMPROBAR SI EL BLOQUE ELEGIDO POR LA IA ES EL DOS
function istwo(){
if(blocktwo == true){
		puntuation = puntuation + 2;
		document.getElementById("Score").innerHTML = puntuation;
		returnplaying();


}else{
		puntuation = puntuation - 1;
		document.getElementById("Score").innerHTML = puntuation;
		returnplaying();
}


}

// FUNCION PARA COMPROBAR SI EL BLOQUE ELEGIDO POR LA IA ES EL TRES
function isthree(){

if(blockthree == true){
		puntuation = puntuation + 2;
		document.getElementById("Score").innerHTML = puntuation;
		returnplaying();


}else{
		puntuation = puntuation - 1;
		document.getElementById("Score").innerHTML = puntuation;
		returnplaying();
}

}


// FUNCION PARA COMPROBAR SI EL BLOQUE ELEGIDO POR LA IA ES EL CUATRO
function isfour(){

if(blockfour == true){
		puntuation = puntuation + 2;
		document.getElementById("Score").innerHTML = puntuation;
		returnplaying();


}else{
		puntuation = puntuation - 1;
		document.getElementById("Score").innerHTML = puntuation;
		returnplaying();
}


}

// FUNCION PARA COMPROBAR SI EL BLOQUE ELEGIDO POR LA IA ES EL CINCO
function isfive(){

if(blockfive == true){
		puntuation = puntuation + 2;
		document.getElementById("Score").innerHTML = puntuation;
		returnplaying();


}else{
		puntuation = puntuation - 1;
		document.getElementById("Score").innerHTML = puntuation;
		returnplaying();
}




}


// FUNCION PARA COMPROBAR SI EL BLOQUE ELEGIDO POR LA IA ES EL SEIS
function issix(){
if(blocksix == true){
		puntuation = puntuation + 2;
		document.getElementById("Score").innerHTML = puntuation;
		returnplaying();


}else{
		puntuation = puntuation - 1;
		document.getElementById("Score").innerHTML = puntuation;
		returnplaying();
}






}


// FUNCION PARA COMPROBAR SI EL BLOQUE ELEGIDO POR LA IA ES EL SIETE
function isseven(){
if(blockseven == true){
		puntuation = puntuation + 2;
		document.getElementById("Score").innerHTML = puntuation;
		returnplaying();


}else{
		puntuation = puntuation - 1;
		document.getElementById("Score").innerHTML = puntuation;
		returnplaying();
}

}


// FUNCION PARA COMPROBAR SI EL BLOQUE ELEGIDO POR LA IA ES EL OCHO
function iseight(){

if(blockeight == true){
		puntuation = puntuation + 2;
		document.getElementById("Score").innerHTML = puntuation;
		returnplaying();


}else{
		puntuation = puntuation - 1;
		document.getElementById("Score").innerHTML = puntuation;
		returnplaying();
}








}





// FUNCION PARA COMPROBAR SI EL BLOQUE ELEGIDO POR LA IA ES EL NUEVE
function isnine(){

if(blocknine == true){
		puntuation = puntuation + 2;
		document.getElementById("Score").innerHTML = puntuation;
		returnplaying();


}else{
		puntuation = puntuation - 1;
		document.getElementById("Score").innerHTML = puntuation;
		returnplaying();
}
}







// FUNCION PARA RECARGAR LA RONDA Y QUE LA IA ELIJA UN NUEVO BLOQUE
function returnplaying(){
	document.getElementById("block-one").style.backgroundColor = "#ffffff";
	document.getElementById("block-two").style.backgroundColor = "#ffffff";
	document.getElementById("block-three").style.backgroundColor = "#ffffff";
	document.getElementById("block-four").style.backgroundColor = "#ffffff";
	document.getElementById("block-five").style.backgroundColor = "#ffffff";
	document.getElementById("block-six").style.backgroundColor = "#ffffff";
	document.getElementById("block-seven").style.backgroundColor = "#ffffff";
	document.getElementById("block-eight").style.backgroundColor = "#ffffff";
	document.getElementById("block-nine").style.backgroundColor = "#ffffff";
	blockone = false;
	blocktwo = false;
	blockthree = false;
	blockfour = false;
	blockfive = false;
	blocksix = false;
	blockseven = false;
	blockeight = false;
	blocknine = false;


blockchoosed = Math.floor(Math.random()*9);
console.log(blockchoosed);

if(blockchoosed == 0){
document.getElementById("block-one").style.backgroundColor = "#cedd51";
blockone = true;

}else if(blockchoosed == 1){
document.getElementById("block-two").style.backgroundColor = "#cedd51";
blocktwo = true;

}else if(blockchoosed == 2){
document.getElementById("block-three").style.backgroundColor = "#cedd51";
blockthree = true;

}else if(blockchoosed == 3){
document.getElementById("block-four").style.backgroundColor = "#cedd51";
blockfour = true;

}else if(blockchoosed == 4){
document.getElementById("block-five").style.backgroundColor = "#cedd51";
blockfive = true;

}else if(blockchoosed == 5){
document.getElementById("block-six").style.backgroundColor = "#cedd51";
blocksix = true;

}else if(blockchoosed == 6){
document.getElementById("block-seven").style.backgroundColor = "#cedd51";
blockseven = true;

}else if(blockchoosed == 7){
document.getElementById("block-eight").style.backgroundColor = "#cedd51";
blockeight = true;

}else if(blockchoosed == 8){
document.getElementById("block-nine").style.backgroundColor = "#cedd51";
blocknine = true;

}else{

	location.reload();
}



}




