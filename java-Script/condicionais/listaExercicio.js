
/*
const nota1 = 7;
const nota2 = 7;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

console.log(media.toFixed(2));

if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Passou no Semestre');
}

*/

/*
const peso = 30;
const altura = 1.70;

const IMC = peso / (altura * altura);

console.log(IMC);

if (IMC < 18.5) {
    console.log('Abaixo do Peso');
} else if (IMC >= 18.5 && IMC < 25) {
    console.log('Peso Normal');
} else if (IMC >= 25 && IMC < 30) {
    console.log('Acima do Peso');
} else if (IMC >= 30 && IMC < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade Grave');
}
*/

const valor = 250;
const formaPagamento = 4;

const debito = valor - (valor * 0.1);
const dinheiroPix = valor - (valor * 0.15);
const duasVezes = valor;
const acimaDuasVezes = valor + (valor * 0.1);


if (formaPagamento === 1) {
    console.log('Valor Final: ' + debito);
} else if (formaPagamento === 2) {
    console.log('Valor Final: ' + dinheiroPix);
} else if (formaPagamento === 3) {
    console.log('Valor Final: ' + duasVezes);
} else if (formaPagamento === 4) {
    console.log('Valor Final: ' + acimaDuasVezes);
}