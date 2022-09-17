// Média utilizando um array

let notas = [10, 6.5, 8, 7.5];

let result = notas.reduce((soma, atual) => soma + atual) / notas.length;

console.log(result);