const tabuada = 2;

for (let i = 1; i <= 10; i++) {
    console.log(tabuada * i);  
}

const lista = [2,3,3,3,4,6,8,10,3];

for (let i = 0; i < lista.length; i++) {

    let numero = lista[i];

    if (numero % 2 === 0) {
        console.log('Número par: ' + numero);
    }   
}