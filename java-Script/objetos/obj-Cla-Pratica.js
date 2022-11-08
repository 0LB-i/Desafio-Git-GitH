
class Pessoa {
    name;
    idade;
    altura;

    constructor(name, idade, altura) {
        this.name = name;
        this.idade = idade;
        this.altura = altura;
    }
}


function comparaPessoa(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.name} é mais velho(a) que ${p2.name}.`);
    } else if (p2.idade > p1.idade){
        console.log(`${p2.name} é mais velho(a) que ${p1.name}.`);
    } else {
        console.log(`${p1.name} e ${p2.name} tem a mesma idade.`);
    }
}

const gabriel = new Pessoa();
gabriel.name = 'Gabriel';
gabriel.idade = 20;
gabriel.altura = 1.72;

const pedro = new Pessoa();
pedro.name = 'Pedro';
pedro.idade = 50;
pedro.altura = 1.78;

comparaPessoa(gabriel, pedro);