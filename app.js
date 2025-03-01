const numeroSecreto = Math.floor(Math.random() * 11); 
let intentos = 3;

while (intentos > 0) {
    let intentoUsuario = prompt(`Adivina el número (entre 0 y 10). Te ${intentos === 1 ? 'queda 1 intento' : 'quedan ' + intentos + ' intentos'}:`);
    
    // Comprobamos si el input no es un número o está fuera del rango
    if (isNaN(intentoUsuario) || intentoUsuario.trim() === "" || intentoUsuario < 0 || intentoUsuario > 10) {
        alert("¡ESO NO ES UN NÚMERO! No se cuenta como intento.");
        continue;
    }

    intentoUsuario = parseInt(intentoUsuario);
    
    if (intentoUsuario === numeroSecreto) {
        alert("¡Felicidades! Has adivinado el número.");
        break;
    } else {
        intentos--;
        if (intentos > 0) {
            let pista = intentoUsuario > numeroSecreto ? "menor" : "mayor";
            alert(`Número incorrecto, intenta de nuevo. Pista: el número secreto es ${pista}.`);
        } else {
            alert(`Lo siento, no has adivinado. El número era ${numeroSecreto}.`);
        }
    }
}