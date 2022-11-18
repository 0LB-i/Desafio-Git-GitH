/*
    Crie uma classe para representar pessoas
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso /(altura * altura));
    Instancie uma pessoa chamada José que tenha 70 kg de peso e 1,75 de altura e peça ao josé para dizer o valor do seu IMC;
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC(){

        const imc = this.calcularIMC();

        if(imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25){
            return 'Peso Normal';
        } else if (imc >= 25 && imc < 30){
            return 'Acima do Peso';
        } else if (imc >= 30 && imc < 40){
            return 'Obeso';
        } else {
            return 'Obesidade Grave';
        }
    }
}

const gabriel = new Pessoa('Gabriel', 80, 1.50);

console.log(gabriel);

console.log(gabriel.calcularIMC());

console.log(gabriel.classificarIMC());

const pedro = new Pessoa('Pessoa', 130, 1.77);

console.log(pedro);

console.log(pedro.calcularIMC());

console.log(pedro.classificarIMC());