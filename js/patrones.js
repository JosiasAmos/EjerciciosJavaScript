 const enviarBtn = document.getElementById('submit');
  enviarBtn.addEventListener('click', function(event) {
  });
function valida(campo){
    event.preventDefault();
            var bRet = false;
            if (campo.value == "")
                document.getElementById("res").innerHTML = "Faltan datos.";
            else  if (!campo.value.match(/^[A-Z]{3,4}[0-9]{6}[A-Z]{3}[0-9]{2}$/))
                    document.getElementById("res").innerHTML = "No tiene formato de RFC.";
                else {
                    bRet = true;
                    document.getElementById("res").innerHTML = "Validado.";  
                }
            return bRet;
        }