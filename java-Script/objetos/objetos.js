

const gabriel = {
    name: 'Gabriel',
    idade: 20,

    descrever: function(){
        console.log(`Meu nome é ${this.name} e minha idade é ${this.idade}`);
    }
};



gabriel.descrever = function(){
    console.log(`Meu nome é ${this.name}`);
}

gabriel.descrever();

console.log(gabriel.name);

gabriel.altura = 1.72;

console.log(gabriel);

delete gabriel.name;

console.log(gabriel);

console.log(gabriel['name'] = 'Gabriel');