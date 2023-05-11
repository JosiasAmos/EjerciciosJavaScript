function Ejecutar(){
  var numero = document.getElementById("numero").value;
  alert("El número "+numero+" es "+ parImpar(numero) );
}

function parImpar(numero) {
  if(numero % 2 == 0)   return "par";
  else   return "impar";
  }