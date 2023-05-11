function Ejecutar() {//Obtiene un elemento del HTML a través de su id "información" para agregar mensajes
  var info = document.getElementById("informacion");

  // Obtiene el número de enlaces de la página a través de su tag "a"
  var enlaces = document.getElementsByTagName("a");

  // Crea un mensaje para ser visualizado en el HTML
  info.innerHTML = "Número de enlaces = " + enlaces.length;

  // Direccion del penúltimo enlace
  var penultimoEnlace = enlaces[enlaces.length - 2];
  var mensaje = "El penúltimo enlace apunta a: " + penultimoEnlace.href;

  // Agrega información al mensaje para ser visualizado en el HTML
  info.innerHTML += "<br/>" + mensaje;

  // Numero de enlaces que apuntan a http://www.orizaba.tecnm.mx
  var contador = 0;
  for (var i = 0; i < enlaces.length; i++) {
    // Es necesario comprobar los enlaces http://prueba y
    // http://prueba/ por las diferencias entre navegadores
    if (enlaces[i].href.includes("http://www.orizaba.tecnm.mx")) {
      contador++;
    }
  }

  // Agrega información al mensaje para ser visualizado en el HTML
  info.innerHTML += "<br/>" + contador + " enlaces apuntan a http://www.orizaba.tecnm.mx";

  // Numero de enlaces del tercer párrafo
  var tercerParrafo = document.getElementsByTagName("p")[2];
  var enlacesTercerParrafo = tercerParrafo.getElementsByTagName("a");

  // Agrega información al mensaje para ser visualizado en el HTML
  info.innerHTML += "<br/>" + "Número de enlaces del tercer párrafo = " + enlacesTercerParrafo.length;

}