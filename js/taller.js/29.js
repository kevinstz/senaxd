let v1 = parseFloat(prompt("Número 1:"));
let v2 = parseFloat(prompt("Número 2:"));
let v3 = parseFloat(prompt("Número 3:"));

let menor, medio, mayor;

if (v1 <= v2 && v1 <= v3) {
    menor = v1;
    if (v2 <= v3) { [medio, mayor] = [v2, v3]; } 
    else { [medio, mayor] = [v3, v2]; }
} else if (v2 <= v1 && v2 <= v3) {
    menor = v2;
    if (v1 <= v3) { [medio, mayor] = [v1, v3]; } 
    else { [medio, mayor] = [v3, v1]; }
} else {
    menor = v3;
    if (v1 <= v2) { [medio, mayor] = [v1, v2]; } 
    else { [medio, mayor] = [v2, v1]; }
}

console.log(`Números en orden ascendente: ${menor}, ${medio}, ${mayor}`);