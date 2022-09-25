const numeroRifa = [1,4,2,7,9,3,8,10,17,18,21,25];

const participantes = ["Mica", "Millan", "Puca", "Pix", "Poo", "Jax", "Noo", "Rya", "Bill", "Buh", "Bah", "Atevilson"];

const sorteado = [numeroRifa, participantes];
let menssagemNumeroRifa = "O número sorteado foi o ";
let menssagemParticipantes = " , o ganhador da rifa foi "

const sortearNumeroRifa = (ganhador) => {
    if (sorteado[0].includes(ganhador)) {
        let search = sorteado[0].indexOf(ganhador);
        return `${menssagemNumeroRifa}` + sorteado[0][search] + `${menssagemParticipantes}` + sorteado[1][search] + "."
    } else {
        return console.log("Ganhador não pagou, refaça o sorteio");
    };
}
console.dir(sortearNumeroRifa(23));