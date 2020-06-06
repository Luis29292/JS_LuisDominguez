function aje(size)//Función que crea al tablero
{
  var bod = document.getElementsByTagName("body");//Obtiene body
  var tab = document.createElement("table");//Crea la tabla en la que estará el tablero
  for (i=1; i<=size; i++)//Repite el proceso dependiendo del tamaño ingresado
  {
    var tr = document.createElement("tr");//Crea una fila de casillas
    if (i%2==0)//Para que dos filas no empiecen en el mismo color
    {
      for (j=1; j<=size/2; j++)//división cada dos celdas
      {
        var bla = document.createElement("td")//Crea una celda negra
        bla.id = "bla";
        tr.appendChild(bla);//La agrega a la fila
        var whi = document.createElement("td")//Crea una celda blanca
        whi.id ="whi";
        tr.appendChild(whi);
      }
    }
    else
    {
      for (j=1; j<=size/2; j++)
      {
        var whi = document.createElement("td")
        whi.id ="whi";
        tr.appendChild(whi);
        var bla = document.createElement("td")
        bla.id = "bla";
        tr.appendChild(bla);
      }
    }
    tab.appendChild(tr);//Agrega la fila a la tabla
  }
  bod[0].appendChild(tab);//Agrega la tabla a body
}
function verif(){//Función para recibir el tamaño
  var size = prompt("Ingresa el tamaño del tablero.");
  size = parseInt(size);//Convierte el string a número
  if (isNaN(size) || size<=0)//Si no es un número o es menor a cero, volverá a pedir el número
  {
    alert("Ingresa un número válido");
    verif();//Recursividad
  }
  else {
    aje(size);//Va a la función que construye el tablero
  }
}
verif();//Comienza con la función que recibe el número
