// Média utilizando um array

let notas = [10, 6.5, 8, 7.5];

// adicionando uma nota
notas.push(5.5);

//deletando nota na posição 4 do array
notas.splice(4, 4);

let result = notas.reduce((soma, atual) => soma + atual) / notas.length;

console.log(`A média das notas é ${result}`);