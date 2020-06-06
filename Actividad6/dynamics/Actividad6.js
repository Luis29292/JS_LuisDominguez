var bod = document.getElementsByTagName("body");//Vamos a insertar todo en body
var rec = document.createElement("div");//Crearemos un div
rec.innerHTML = "<h1> Soy el más grande </h1>";//Añadimos la línea
rec.innerHTML += "<h2>Curso Web 2020</h2>";
var med = document.createElement("h2");//Creamos el elemento h2 para añadirle un id
med.id = "med";
med.innerText = "Mediano";//Le asignamos un texto
rec.appendChild(med);//Agrega med al div
var jelou = document.createElement("h3");
jelou.id = "jelou";
jelou.innerText = "Jelou";
rec.appendChild(jelou);
rec.innerHTML += "<h3>Estoy medio chiquito :(</h3>";
bod[0].appendChild(rec);//Agrega todo lo que es el div, a body
