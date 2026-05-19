let horasRegulares = parseFloat(prompt("Horas regulares trabajadas:"));
let horasExtra = parseFloat(prompt("Horas extra trabajadas:"));
let valorHoraReg = parseFloat(prompt("Valor de la hora regular:"));

let salarioBase = horasRegulares * valorHoraReg;
let salarioExtra = horasExtra * (valorHoraReg * 1.5);
let salarioTotal = salarioBase + salarioExtra;

console.log("Salario total: " + salarioTotal);