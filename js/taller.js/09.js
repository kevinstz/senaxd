let a = prompt("Ingrese el valor A:");
let b = prompt("Ingrese el valor B:");

console.log(`Antes del intercambio -> A: ${a}, B: ${b}`);

// Intercambio usando desestructuración (moderno en JS)
[a, b] = [b, a];

console.log(`Después del intercambio -> A: ${a}, B: ${b}`);