
const nome = 'Gabriel Brandão Machado';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

let totalNotas = 0;

for (let i = 0; i < notas.length; i++) {
    totalNotas = totalNotas + notas[i];
}

console.log(totalNotas);

const media = totalNotas / notas.length;
console.log(media);