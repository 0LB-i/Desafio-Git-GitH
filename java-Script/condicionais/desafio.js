

const etanol = 3.20;
const gasolina = 4.60;
const mediaGastoKm = 13;
const distanciaKm = 320;
const tipoCombustivel = 'gasolina';

let listrosConsumidos = distanciaKm / mediaGastoKm;

let gastoViajem = 0;

if (tipoCombustivel === 'etanol') {
    gastoViajem =  listrosConsumidos * etanol;
    console.log('Com etanol o gasto total foi de: ' + gastoViajem.toFixed(2));
} else {
    gastoViajem = listrosConsumidos * gasolina;
    console.log('Com gasolina o gasto total foi de: ' + gastoViajem.toFixed(2));
}