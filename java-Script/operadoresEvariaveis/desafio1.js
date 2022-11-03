//Faça um programa para calcular o valor gasto de combúsivel em uma viagem
/*
    VocÊ terá 3 variáveis:
    1-Preço do combustível;
    2-valor médio de gasto de carro;
    3-Distância em Km;
*/

//imprima no console o valor que será gasto de combústivel que será gasto em uma viajem;

const valorFuel = 5.79;
const KmPorLitros = 10;
let distanciaKm = 100;

let litrosConsumidos = distanciaKm/KmPorLitros;
let valorGasto = litrosConsumidos*valorFuel;



console.log('Valor gasto de combústivel na viagem: ' + valorGasto);