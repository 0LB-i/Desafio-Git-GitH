
function aplicarDesconto(valor, desconto){
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros){
    return valor + (valor * (juros / 100));
}

function pagamento(formaDePagamento){
    if(formaDePagamento === 1){
        return aplicarDesconto(valor, 10);
    } else if (formaDePagamento === 2){
        return aplicarDesconto(valor, 15);
    } else if (formaDePagamento === 3){
        return valor;
    } else if (formaDePagamento === 4){
        return aplicarJuros(valor, 10);
    }
}

const valor = 300;
const formaDePagamento = 4;

console.log('O valor final é ' + pagamento(formaDePagamento));

