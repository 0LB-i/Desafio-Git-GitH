

class Pessoa {
    name;
    idade;
    altura;

    constructor(name, idade, altura) {
        this.name = name;
        this.idade = idade;
        this.altura = altura;
    }

    descrever() {
        console.log(`Meu nome é ${this.name} e minha idade é ${this.idade}`);
    }
}


const julia = new Pessoa('Júlia', 33, 1.54);

const gabriel = new Pessoa();
gabriel.name = 'Gabriel';
gabriel.idade = 20;
gabriel.altura = 1.72;

const pedro = new Pessoa();
pedro.name = 'Pedro';
pedro.idade = 50;
pedro.altura = 1.78;


gabriel.descrever();
pedro.descrever();
julia.descrever();