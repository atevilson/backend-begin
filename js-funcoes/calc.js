// funções de cálculo

function multiplica(a,b) {
    return a * b;
}

function soma(c,d) {
    return c + d;
}

function diminui(e,f) {
    return e - f;
}

function dividi(g,h) {
    return g / h;
}

function resultado(result) {
    console.log(`O resultado é ${result}`)
}


console.log(resultado(multiplica(soma(4,5), diminui(5,1))));

