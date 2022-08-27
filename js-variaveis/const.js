// Declarando variáveis com const

const forma = "bola"

const altura = 10;
const comprimento = 3;

// Precisei declarar o result com let porque o valor pra essa variável é indefinido.
let result;

if (forma === "triangulo") {
    result = altura * comprimento;
}else {
    result = (altura * comprimento) / 2
}


console.log(result);