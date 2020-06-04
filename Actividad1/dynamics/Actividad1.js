var a = prompt("Piso del elevador A");
var b = prompt("Piso del elevador B");
var persona = prompt("Piso del usuario");
var rA= persona-a;
var rB= persona-b;
if (rA<0){
  rA=rA*(-1);
}
if (rB<0){
  rB=rB*(-1);
}
if (rA<rB){
  alert("Debe tomar el elevador A");
}
else if (rB<rA) {
  alert("Debe tomar el elevador B");
}
else if (rA==rB) {
  alert("Cualquiera funciona");
}
