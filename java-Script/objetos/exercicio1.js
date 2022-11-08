/*
    1 - crie uma classe para representar carros;
    2 - os carros possuem uma marca, uma cor e um consumo médio de combustível por kilômetro rodado.
    3 - crie um método que dado a quantidae de quilômetros e o preço do combústivel no de o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    cunsumoMedioPorKm;

    constructor(marca, cor, cunsumoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.cunsumoMedioPorKm = cunsumoMedioPorKm;
    }
} 

const uno = new Carro('Fiat', 'Preto', 1/13.5);




