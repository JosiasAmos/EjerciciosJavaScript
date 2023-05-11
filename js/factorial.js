function Ejecutar(){
  var numero = document.getElementById("numero").value;
  var resultado = 1;
  
  for(var i=1; i<=numero; i++) {
    resultado *= i;
  }
  alert(resultado);
}
