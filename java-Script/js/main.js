/*var nome = "Gabriel Machado";
var idade = 19;
var idade2 = 10;
var frase = "Windows é o melhor sistema operacional";
var fruta = {nome:"maça", cor:"vermelha"};
var fruta2 = [{nome:"maça", cor:"vermelha"}, {nome:"pera", cor:"verde"}, {nome:"uva", cor:"roxa"}];
*/

/*alert(nome+" Têm "+idade+" anos.");
alert(idade +idade2);  
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Windows", "Ubuntu"));
console.log(frase.toUpperCase());
*/
/*
var lista = ["maça","pera","uva","limão"];
lista.push("laranja");
lista.pop("uva"); retira o último elemento da lista
*/
/*
console.log(lista);
console.log(lista.join("-"));
console.log(lista.length);
console.log(lista.reverse());
console.log(fruta.cor);
console.log(fruta2[2].cor);
*/
/*
var idade = prompt("Qual a sua idade?");

if(idade > 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/
/*
var count = 0;
while(count <= 5){
    console.log(count);
    count++;
};
*/
/*
var count;
for(count = 0; count <=5; count++){
    alert(count);
};
*/
/*
var d = new Date();
alert(d.getMonth()+1); // Sempre têm que adicionar +1/
*/
/*
function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5,10));
*/
/*
var idade = prompt("Qual a sua idade?")
function validaIdade(idade){
    var validar;
    if(idade >= 18){
    validar = true;
    }else{validar = false}
    return validar;
}
console.log(validaIdade(idade));
*/

function clicar(){
    //alert("Obrigado por clicar");
    document.getElementById("agradescimento").innerHTML = "Obrigado por clicar</b>";
    //console.log(document.getElementById("agradescimento"));
}

function redirecionar(){
    
}

