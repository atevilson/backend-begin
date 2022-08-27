/* Declarando variável com let, esse tipo de declaração não permite que seja redeclarado uma variábel no mesmo escopo de bloco */

let forma = "retangulo";
let altura = 10;
let comprimento = 8;

let result;


if (forma === "quadrado") {
    result = altura * comprimento;
}else {
    result = (altura * comprimento) / 2
}

console.log(result);
