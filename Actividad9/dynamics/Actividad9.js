function numAl(){
  return Math.round(Math.random()*100);//Genera el número al azar
}

function eleNum(callback){//Usa callback para generarlos
console.log("Eligiendo los números");
setTimeout(()=>{
  callback();
  setTimeout(()=>{
    callback();
    setTimeout(()=>{
      callback();
      setTimeout(()=>{
        callback();
        setTimeout(()=>{
          callback();
        }, 1000)
      },1000)
    },1000)
  },1000)
},1000);
}

function inicio(){
  var i=0;//Variable para indexar el arreglo
  var y=i;//Variable para no perder el valor de i
  var x = new Array();//Crea un arreglo para guardar los números

  eleNum(()=>{//Función que hará uso del callback
    var sim = new Array ();//Crea un arreglo para comparar con los elementos de x
    var es = true;//Variable que define si el usuario estuvo bien o  no
    x[i]=numAl();//Guarda los números aleatorios en x
    window.alert(x[i]);//Muestra al usuario el nuevo número
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
    y=i;//Y ahora es igual al nuevo valor de i
    if (es==true)//Si todos fueron iguales, le dará un mensaje bueno y continuará
      window.alert("¡Muy bien!");
    else{//Si hubieron errores, dará un mensaje de derrota y recargará el juego
      window.alert("Simón está triste,te has equivocado :c (Se reiniciará el juego)");
      var per=true;//Variable que será útil en la última ronda
      window.location.reload();
    }
    console.log(x);//Muestra al programador los números que van anteriores. Se puede borrar esta línea
    if (i==5 && per!=true)//Para evitar que muestre como ganador a quien pierde en la última ronda, verifica que per no sea verdadero
    {
      window.alert("¡Ganaste! :) (Se reiniciará el juego)");
      window.location.reload();//Reinicia el juego.
    }
  });
}
inicio();//Llama a la función que hace todo
