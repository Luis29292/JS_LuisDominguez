function numAl(){
  return Math.round(Math.random()*100);//Genera el número al azar
}
var x = new Array();//Crea un arreglo para guardar los números
var i=0;//Variable para indexar el arreglo
var y=i;//Variable para no perder el valor de i
function inicio(){
  var sim = new Array();//Crea un arreglo para comparar con los elementos de x
  var es = true;//Variable que define si el usuario estuvo bien o  no
  var num = new Promise(function(resolve, reject) {
    console.log("Eligiendo el número");
    x[i]=numAl();
    resolve(x[i]);
  });
  num.then(function(value) {
    window.alert(value); // Success!
    while (i>=0){
      sim[i]=prompt("Introduce los números en el orden");//Entre más rondas vayan, más veces pedirá un número
      i--;//Disminuye para acercarse a cero
    }
    sim.reverse();//Voltea los introducidos, para que estén en el orden de x
    i=y;//Reestablece el valor de i
    while (i>=0){
      if (x[i]!=sim[i])
      {
        es = false;//Si no son iguales, será falso
      }
      i--;
    }
    i=y;
    i++//Aumenta i para la siguiente ronda
    y=i;
    if (es==true){//Si todos fueron iguales, le dará un mensaje bueno y continuará
      window.alert("¡Muy bien!");
      inicio();
    }
    else{//Si hubieron errores, dará un mensaje de derrota y recargará el juego
      window.alert("Simón está triste,te has equivocado :c (Se reiniciará el juego)");
      window.alert("Lograste: "+i+" números");//Da el puntaje logrado
      window.location.reload();
    }
  }, function(reason) {
    console.log(reason); // Error!
  });
}
inicio();//Llama a la función que hace todo
