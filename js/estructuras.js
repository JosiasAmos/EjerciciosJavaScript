function Ejecutar(){
var numero1 = document.getElementById("numero1").value;
var numero2 = document.getElementById("numero2").value;

  if(numero1 <= numero2)
    alert("numero1 no es mayor que numero2");
  
  if(numero2 >= 0)
    alert("numero2 es positivo");
  
  if(numero1 < 0 || numero1 != 0)
    alert("numero1 es negativo o distinto de cero");
  
  if(++numero1 < numero2)
    alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

