let numerosSorteados = [];
let numeroMaximo = 10;
let numeroMinimo = 1;
let numeroSecreto; 
let intento = 1; 



function asignarTextoElemento(elemento, texto) {
    let elemetHTML = document.querySelector(elemento);
    elemetHTML.innerHTML = texto; 
     return;
}

asignarTextoElemento('h1', 'Juego del numero Secreto');

asignarTextoElemento('p', `Selecciona un numero del ${numeroMinimo} al ${numeroMaximo}: `);

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
         //ya sorteamos todos los numeros?
    if (numerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles.');
    } else{
         if (numerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto(); 
    } else {
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
   
}


function verificarIntento() {
     let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
     console.log (numeroDeUsuario===numeroSecreto);
      if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento ('p', `ADIVINASTE EL NUMERO! en ${intento} ${intento===1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
     } else {
        //el usuario no adivino
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p', `el numero Secreto es Menor`);
        } else {
            asignarTextoElemento ('p', `el numero Secreto es Mayor`);
        }
        intento++;
        limpiarCaja();  
    }
     

     return;
}

function limpiarCaja() {
    document.querySelector('#valorDeUsuario').value = '';
    return;
}


function condicionesIniciales() {
asignarTextoElemento('h1', 'Juego del numero Secreto');
asignarTextoElemento('p', 'Selecciona un numero del 1 al 10: ');
numeroSecreto=generarNumeroSecreto();
intento = 1;
}

function reiniciarJuego() {
     limpiarCaja();
     condicionesIniciales();
     //deshabilitar el boton de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales(); 