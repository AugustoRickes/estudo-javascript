//Criar uma função que receba como parâmetro um array de
//números e retorne um array contendo somente números positivos.
var array = [10,-10,20,30,40,-60,-70];
function apenasPositivo(x){
    return x >0;

}
var resultado = array.filter(apenasPositivo);
console.log(resultado);