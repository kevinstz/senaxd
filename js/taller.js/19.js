let ingresos = parseFloat(prompt("Ingrese sus ingresos mensuales:"));
let porcentaje = 0;

if (ingresos < 1500000) {
    porcentaje = 0;
} else if (ingresos <= 3000000) {
    porcentaje = 0.10;
} else {
    porcentaje = 0.20;
}

let impuesto = ingresos * porcentaje;
let neto = ingresos - impuesto;

console.log("Salario Bruto: " + ingresos);
console.log(`Impuesto (${porcentaje * 100}%): ` + impuesto);
console.log("Salario Neto: " + neto);