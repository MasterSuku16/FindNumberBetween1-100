//numeroEntrada
let numeroAzar = Math.floor(Math.random()*100)+1
let numeroEntrada = document.getElementById('numeroEntrada')

let mensaje = document.getElementById('mensaje')


function checkResult() {
    let numeroIngresado = parseInt(numeroEntrada.value)
    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'por favor, introduce un numero valido'
        return
    }
    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = 'felicidades papu';
        mensaje.style.color = 'green';
        numeroEntrada.disable = true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = 'mas alto wey, es numero es mayor al que dijiste'
        mensaje.style.color = 'blue';
    }else{
        mensaje.textContent = 'menos wey, es numero es menor al que dijiste'
        mensaje.style.color = 'red';
    }
}
