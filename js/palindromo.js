const enviarBtn = document.getElementById('submit');
enviarBtn.addEventListener('click', function(event) {
});

function palindromo(cadena) {
  var resultado = "La cadena \"" + cadena + "\" \n";
  // Pasar a minusculas la cadena
  var cadenaOriginal = cadena.toLowerCase();
  // Convertir la cadena en un array
  var letrasEspacios = cadenaOriginal.split("");
  // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
  var cadenaSinEspacios = "";
  for (i in letrasEspacios)
    if (letrasEspacios[i] != " ")
      cadenaSinEspacios += letrasEspacios[i];
  var letras = cadenaSinEspacios.split("");
  var letrasReves = cadenaSinEspacios.split("").reverse();
  // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
  var iguales = true;
  for (i in letras)
    if (letras[i] != letrasReves[i])
      iguales = false;
  if (iguales)
    resultado += " es un palíndromo";
  else
    resultado += " no es un palíndromo";
  return resultado;
}

//Esta funcion es para que se active todo el codigo y sea mostrado el resultado en un H2
function procesarCadena() {
  event.preventDefault();
  var cadena = document.getElementById("cadenaOriginal").value;
  var resultado = palindromo(cadena);
  document.getElementById("res").innerHTML = resultado;
}
