// Cálculos usando "arrow functions"

const calculadora = (a,b) => {
    if(a <= 10 || b <= 10) {
        return a / b;
    }else {
        return a * b;
    };
};

console.log(calculadora(15,11));