let edadPersona = parseInt(prompt("Ingrese la edad:"));

if (edadPersona >= 0 && edadPersona <= 12) {
    console.log("Clasificación: Niño");
} else if (edadPersona >= 13 && edadPersona <= 17) {
    console.log("Clasificación: Joven");
} else if (edadPersona >= 18 && edadPersona <= 59) {
    console.log("Clasificación: Adulto");
} else if (edadPersona >= 60) {
    console.log("Clasificación: Adulto mayor");
} else {
    console.log("Edad no válida.");
}