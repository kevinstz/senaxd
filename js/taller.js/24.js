let anio = parseInt(prompt("Ingrese el año:"));

if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
    console.log(`El año ${anio} es bisiesto.`);
} else {
    console.log(`El año ${anio} no es bisiesto.`);
}