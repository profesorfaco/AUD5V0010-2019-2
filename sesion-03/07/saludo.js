function saluda(){
var nombre = document.getElementById("nombre").value;
var edad = document.getElementById("edad").value;
document.getElementsByTagName("h1")[0].innerText="Hola " + nombre;
var depende;
if (edad < 25){
	depende = "red";
} else {
	depende = "blue";
}
document.getElementsByTagName("h1")[0].style.color = depende;
}