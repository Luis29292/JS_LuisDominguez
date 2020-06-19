//No pude completarlo, por lo que tiene algunos errores y no identifica cuando hay un ganador.
var ant = new Array(3);//Arreglo que guarda el valor anterior
ant = [6,6,6];
function inicio(or){//Recibe el origen
  var pri = document.getElementById(or);//Obtenemos los elementos con el id
  var r = new Array(4);
  for (i=4; i>=0; i--)
  {
    r[i]= document.createElement("div");
    r[i].id = "r"+(i+1)+1;//Le ponemos el id a las partes
    pri.appendChild(r[i]);
  }
  window.setTimeout(pedido,100);//Evitamos errores con el alert
}
function remove(or,lle){//Función para quitar de la torre. Recibe el origen y la llegada
  var pri = document.getElementById(or);
  var bor = new Array(4);
  for (i=4; i>=0; i--)
  {
    bor[i] = document.getElementById("r"+(i+1)+or);
  }
  bor.reverse();//Invertimos para que sean de pequeño a grande
  pop = bor.pop();//Agarramos el último elemento
  while (pop == null){//Si no existe, lo vuelve a intentar
    pop = bor.pop();
    console.log("Me atoré :c");//Error en la página
  }
  i=pop.id;
  i = i.substr(1,1);//Agarramos la parte del id
  var ser = new Array(6);
  for (j=1; j<=5; j++){

    ser[j] = document.getElementById("r"+j+lle);
    if (ser[j] != null){
      ant[lle-1]=j;
    }

  }
  if (ser[1]==null && ser[2] ==null && ser[3]==null && ser[5]==null && ser[5]==null )
    ant[lle-1]=5;
  if (i<=ant[lle-1]){

    pri.removeChild(pop);

    pop.id = "r" + i + lle;

    ant[lle-1]=i;
    add(lle,pop);

  }
  else if (ant[lle-1]==0) {
    res1 = document.getElementById("r1"+lle);
    if (res1==null)
    {
      ant[lle-1]=i;
      pri.removeChild(pop);
      console.log(pri);
      pop.id = "r" + i + lle;
      console.log(lle);
      for (j=5; j>=2; j--){
        ser = document.getElementById("r"+j+lle);
        if (ser != null)
          i=j;
        console.log(i);
      }

      ant[lle-1]=i;
      add(lle,pop);
      console.log(ant[lle-1]);
    }
    else{
      window.alert("Debe ser más pequeño para ir encima");
      console.log(ant[lle-1]);
      pedido();
    }
  }
  else{
    window.alert("Debe ser más pequeño para ir encima");
    console.log(ant[lle-1]);
    pedido();
  }
}
function add(lle,push){//Para agregar a la otra torre
  var pri = document.getElementById(lle);

  pri.appendChild(push);
  window.setTimeout(pedido,100);
}
function pedido(){
  var origen = window.prompt("Torre de origen");
  var llegada = window.prompt("Torre de llegada");
  remove(origen,llegada);

}
var origen=1;
inicio(origen);//La primera torre será la 1
