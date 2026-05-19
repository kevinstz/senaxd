let valor1 = parseFloat(prompt("Número 1:"));
let valor2 = parseFloat(prompt("Número 2:"));

if (valor1 > valor2) {
    console.log(valor1 + " es mayor.");
} else if (valor2 > valor1) {
    console.log(valor2 + " es mayor.");
} else {
    console.log("Los números son iguales.");
}