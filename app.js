let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
 // Triple igual para validar que tanto el valor como el tipo de dato sean iguales
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`¡Buen trabajo! Acertaste el número secreto en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        // El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','¡UPS! El número secreto es menor...');
        }else{
            asignarTextoElemento('p','¡UPS! El número secreto es Mayor...');
        }
        intentos++;
        limpiarCajaTexto();
    }
    return;
}

function limpiarCajaTexto() {
    document.querySelector('#valorUsuario').value = ''; 
}

function generarNumeroSecreto() {
    return  Math.floor(Math.random()*10)+1;
}

function condicionesIniciales(){ 
    asignarTextoElemento('h1','Juego del Número secreto');
    asignarTextoElemento('p','Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled','true');


}

function reiniciarJuego() {
    // Limpiar caja 
    limpiarCajaTexto();
    // indicar mensaje de intervalo de números
    // generar el número aleatorio
    // deshabilitar el botón de nuevo juego
    // inicializar el número de intentos
    condicionesIniciales();
    // deshabilitar el botón de nuevo juego
}


condicionesIniciales();


