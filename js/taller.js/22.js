let lado1 = parseFloat(prompt("Lado 1:"));
let lado2 = parseFloat(prompt("Lado 2:"));
let lado3 = parseFloat(prompt("Lado 3:"));

// Validar que sea un triángulo real
if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("Triángulo Equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("Triángulo Isósceles.");
    } else {
        console.log("Triángulo Escaleno.");
    }
} else {
    console.log("Los lados no forman un triángulo válido.");
}