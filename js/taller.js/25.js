console.log("--- MENÚ ---");
console.log("1. Saludar");
console.log("2. Mostrar fecha (simulada)");
console.log("3. Salir");

let opcion = prompt("Seleccione una opción (1-3):");

if (opcion === "1") {
    console.log("¡Hola! Esperamos que tengas un excelente día.");
} else if (opcion === "2") {
    console.log("Fecha simulada: 18 de Mayo de 2026");
} else if (opcion === "3") {
    console.log("Saliendo del programa... ¡Adiós!");
} else {
    console.log("Opción no válida.");
}