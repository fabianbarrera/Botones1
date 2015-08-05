function FondoRojo() {
	document.body.style.backgroundColor="red";
	
}

function FondoAzul() {
	document.body.style.backgroundColor="blue";
	
}

function mensajeHora() {
	
	

var hora = new Date();

alert(hora.getHours() + ":" + (hora.getMinutes()) + ":" + hora.getSeconds());
	
}

function escribirFecha() {
	
	

var fecha = new Date();

document.getElementById("escribirFecha").innerHTML=fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear();
	
}

function MostrarURL() {
	
	alert(window.location.href);
	
}

