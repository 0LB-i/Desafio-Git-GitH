/*
    1 - crie uma classe para representar carros;
    2 - os carros possuem uma marca, uma cor e um consumo médio de combustível por kilômetro rodado.
    3 - crie um método que dado a quantidae de quilômetros e o preço do combústivel no de o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    consumoMedioPorKm;

    constructor(marca, cor, consumoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.consumoMedioPorKm = consumoMedioPorKm;
    }

    clacularGastoViagem(distanciaKm, precoCombustivel){
        return precoCombustivel * (distanciaKm * this.consumoMedioPorKm);
    }
} 



const uno = new Carro('Fiat', 'Preto', 1/13.5);

console.log(uno);

console.log(uno.clacularGastoViagem(70, 6.8));

const palio = new Carro('Fiat', 'Vermelho', 1/11);

console.log(palio);

console.log(palio.clacularGastoViagem(80, 6.8));


